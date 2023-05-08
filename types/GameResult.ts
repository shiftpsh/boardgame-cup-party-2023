export interface GameResultRank {
  rank: number;
  exclude: boolean;
  handle: string;
}

export interface GameResultStarted {
  uuid: string;
  startedAt: number;
  gameId: string;
  players: string[];
}

export interface GameResultFinished extends GameResultStarted {
  finishedAt: number;
  durationMinutes: number;
  result: GameResultRank[];
}

export type GameResult = GameResultStarted | GameResultFinished;
