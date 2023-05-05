export interface GameResultRank {
  rank: number;
  exclude: boolean;
  handle: string;
}

export interface GameResult {
  finishedAt: string;
  gameId: string;
  result: GameResultRank[];
}
