import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { AddNewPlayerToExistingSessionModel } from './models/add-new-player-to-existing-session';
import { AddNewPlayerToNewSessionModel } from './models/add-new-player-to-new-session-model';
import { GameMode } from './models/game-mode';
import { PlayerModel } from './models/player-model';
import { Session } from './models/session';
import { ResistanceGameService } from './resistance-game.service';

@Component({
  selector: 'app-resistance-role-generator',
  templateUrl: './resistance-role-generator.component.html',
  styleUrls: ['./resistance-role-generator.component.scss']
})
export class ResistanceRoleGeneratorComponent implements OnInit, OnDestroy {

  constructor(private resistanceGameService: ResistanceGameService) { }

  ngOnInit() { }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public playerHasJoinedSession$ = new BehaviorSubject(false);
  public joinedSession$ = new BehaviorSubject<Session>({id: '', gameMode: {id: '', name: ''}, numberOfPlayers: 0, players: [] } as Session);

  public readonly allGameModes = this.resistanceGameService.allGameModes;

  public get validPlayerCounts() {
    return this.resistanceGameService.validPlayerCounts;
  }

  public newPlayerForm = new FormGroup({
    playerName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    sessionId: new FormControl('', Validators.maxLength(4)),
    startNewSession: new FormControl(false),
    numberOfPlayers: new FormControl(5),
    gameMode: new FormControl(this.allGameModes[0])
  });

  private readonly _destroy$ = new Subject();

  public get disablePlayerFormSubmission$(): Observable<boolean> {
    return this.newPlayerForm.valueChanges
      .pipe(
        map(_ => !!this.newPlayerForm.valid),
        takeUntil(this._destroy$)
      );
  }

  public playerFormSubmit(): void {
    if (!this.newPlayerForm.valid) {
      alert("Form invalid.");
      return;
    }

    if (!!this.newPlayerForm.get('startNewSession').value) {
      const player = {
        name: this.newPlayerForm.get('playerName').value,
        numberOfPlayers: this.newPlayerForm.get('numberOfPlayers').value,
        gameModeId: this.newPlayerForm.get('gameMode').value.id
      } as AddNewPlayerToNewSessionModel;

      this.resistanceGameService.addNewPlayerToNewSession(player)
        .subscribe(x => {
          this.playerHasJoinedSession$.next(true);
          this.joinedSession$.next(x);
        });
    }
    else {
      const player = {
        name: this.newPlayerForm.get('playerName').value,
        sessionId: this.newPlayerForm.get('sessionId').value
      } as AddNewPlayerToExistingSessionModel;

      this.resistanceGameService.addNewPlayerToExistingSession(player)
        .subscribe(x => {
          this.playerHasJoinedSession$.next(true);
          this.joinedSession$.next(x);
        });
    }
  }
}
