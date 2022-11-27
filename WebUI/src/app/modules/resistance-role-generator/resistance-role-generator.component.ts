import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

class PlayerModel {
  name: string;
  id: string;
}

class GameMode {
  name: string;
  id: string;
}

@Component({
  selector: 'app-resistance-role-generator',
  templateUrl: './resistance-role-generator.component.html',
  styleUrls: ['./resistance-role-generator.component.scss']
})
export class ResistanceRoleGeneratorComponent implements OnInit {

  constructor(private http: HttpClient) {
    const regularResistance = new GameMode();
    regularResistance.name = "Regular";
    this.allGameModes.push(regularResistance);

    const chaOSmOdE = new GameMode();
    chaOSmOdE.name = "ChaOS mOdE";
    this.allGameModes.push(chaOSmOdE);

    const allAny = new GameMode();
    allAny.name = "All any";
    this.allGameModes.push(allAny);

    this.validPlayerCounts.push(5);
    this.validPlayerCounts.push(6);
    this.validPlayerCounts.push(7);
    this.validPlayerCounts.push(8);
    this.validPlayerCounts.push(9);
    this.validPlayerCounts.push(10);
  }

  ngOnInit() {
    this.disableSessionId$.subscribe();
    this.onPlayerFormSubmit$.subscribe();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public readonly validPlayerCounts = new Array<number>();

  public readonly allGameModes = new Array<GameMode>();

  public playerForm = new FormGroup({
    playerName: new FormControl('', Validators.required),
    sessionId: new FormControl('', Validators.maxLength(4)),
    startNewSession: new FormControl(false),
    numberOfPlayers: new FormControl(5),
    gameMode: new FormControl(this.allGameModes)
  })

  private readonly _destroy$ = new Subject();
  private readonly _playerFormSubmit$ = new Subject();

  public playerHasJoinedSession$ = new BehaviorSubject(false);
  public sessionId$ = new BehaviorSubject('');
  public gameMode$ = new BehaviorSubject(null);
  public numberOfPlayers$ = new BehaviorSubject(null);

  public get disablePlayerFormSubmission$(): Observable<boolean> {
    return this.playerForm.valueChanges
      .pipe(
        map(_ => !!this.playerForm.valid),
        takeUntil(this._destroy$)
      );
  }

  public get disableSessionId$(): Observable<boolean> {
    return this.playerForm.get("startNewSession")
      .valueChanges
      .pipe(
        tap((x: boolean) => {
          if(!!x) {
            this.playerForm.controls['sessionId'].disable();
           } else {
              this.playerForm.controls['sessionId'].enable();
            }
        }),
        takeUntil(this._destroy$)
      );
  }

  public playerFormSubmit(): void {
    this._playerFormSubmit$.next();
  }

  private onPlayerFormSubmit$ = this._playerFormSubmit$
    .pipe(
      map(_ => {
        return !!this.playerForm.valid;
      }),
      filter(x => !!x),
      tap(_ => {
        const playerModel = new PlayerModel();

        // TODO: wire up with actual submission logic
        const sessionId = !!this.playerForm.get('startNewSession').value
          ? 'TEST' : this.playerForm.get('sessionId').value as string;
        this.sessionId$.next(sessionId);
        this.numberOfPlayers$.next(this.playerForm.get('numberOfPlayers').value);
        this.gameMode$.next(this.playerForm.get('gameMode').value);

        playerModel.name = this.playerForm.get('playerName').value;
        this.players.push(playerModel);
        this.playerHasJoinedSession$.next(true);
      }),
      takeUntil(this._destroy$)
    );

  players = new Array<PlayerModel>();
}
