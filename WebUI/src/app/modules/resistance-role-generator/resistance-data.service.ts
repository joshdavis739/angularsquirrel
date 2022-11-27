import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddNewPlayerToExistingSessionModel } from './models/add-new-player-to-existing-session';
import { AddNewPlayerToNewSessionModel } from './models/add-new-player-to-new-session-model';
import { GameMode } from './models/game-mode';
import { PlayerModel } from './models/player-model';
import { Session } from './models/session';

@Injectable({
  providedIn: 'root'
})
export class ResistanceDataService {

  constructor() { }

  public get allGameModes(): GameMode[] {
    return [
      { id: "REGULAR", name: "Regular" },
      { id: "CHAOS", name: "ChaOS mOdE" },
      { id: "ALLANY", name: "All any" }
    ] as GameMode[];
  }

  public addNewPlayerToExistingSession(newPlayer: AddNewPlayerToExistingSessionModel): Observable<Session> {
    // TODO: implement API
    const session = {
      id: newPlayer.sessionId,
      gameMode: {
        id: "NEEDSLOADING",
        name: "'Needs loading from API'"
      },
      numberOfPlayers: 5,
      players: [{
        id: "NEEDSLOADING",
        name: newPlayer.name
      }]
    } as Session;

    return of(session);
  }

  public addNewPlayerToNewSession(player: AddNewPlayerToNewSessionModel): Observable<Session> {
    // TODO: implement API. Temporarily generate session ID on client side
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < 4; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const gameMode = this.allGameModes.filter(x => x.id === player.gameModeId)[0];

    const session = {
      id: result,
      gameMode: gameMode,
      numberOfPlayers: 5,
      players: [{
        id: "NEEDSLOADING",
        name: player.name
      }]
    } as Session;

    return of(session);
  }
}
