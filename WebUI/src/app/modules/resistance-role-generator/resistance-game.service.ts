import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AddNewPlayerToExistingSessionModel } from './models/add-new-player-to-existing-session';
import { AddNewPlayerToNewSessionModel } from './models/add-new-player-to-new-session-model';
import { Session } from './models/session';
import { ResistanceDataService } from './resistance-data.service';

@Injectable({
  providedIn: 'root'
})
export class ResistanceGameService {

  constructor(private readonly _dataService: ResistanceDataService) { }

  public readonly validPlayerCounts = [
    5,6,7,8,9,10
  ];

  public get allGameModes() {
    return this._dataService.allGameModes;
  }

  public addNewPlayerToNewSession(player: AddNewPlayerToNewSessionModel): Observable<Session> {
    return this._dataService.addNewPlayerToNewSession(player);
  }

  public addNewPlayerToExistingSession(player: AddNewPlayerToExistingSessionModel): Observable<Session> {
    return this._dataService.addNewPlayerToExistingSession(player);
  }

  public joinedSessionId = new Subject<string>();
}
