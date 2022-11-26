import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

class PlayerModel {
  name: string;
  sessionId: string;
  startNewSession: boolean;
}

@Component({
  selector: 'app-resistance-role-generator',
  templateUrl: './resistance-role-generator.component.html',
  styleUrls: ['./resistance-role-generator.component.scss']
})
export class ResistanceRoleGeneratorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.disableSessionId$.subscribe();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public playerForm = new FormGroup({
    playerName: new FormControl('', Validators.required),
    sessionId: new FormControl('', Validators.maxLength(4)),
    startNewSession: new FormControl(false)
  })

  private readonly _destroy$ = new Subject();

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

  players = new Array<PlayerModel>();
}
