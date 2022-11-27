import { GameMode } from "./game-mode";
import { PlayerModel } from "./player-model";

export interface Session {
  id: string;
  gameMode: GameMode;
  numberOfPlayers: number;
  players: PlayerModel[];
}
