export interface GameResultRank {
  rank: number;
  exclude: boolean;
  handle: string;
}

export interface GameResult {
  uuid: string;
  finishedAt: number;
  gameId: string;
  durationMinutes: number;
  result: GameResultRank[];
}
