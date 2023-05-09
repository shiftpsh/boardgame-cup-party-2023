import {
    GameResultFinished,
    GameResultRank,
    GameResultStarted,
} from "./GameResult";

export interface ScoreboardGameScoreEntry {
  type: "game";
  score: number;
  game: GameResultFinished;
  result: GameResultRank;
  frozen: boolean;
}

export interface ScoreboardSolveScoreEntry {
  type: "solves";
  score: number;
  solves: number;
  frozen: boolean;
}

export interface ScoreboardUser {
  handle: string;
  exclude: boolean;
  score: number;
  scoreEntries: (ScoreboardGameScoreEntry | ScoreboardSolveScoreEntry)[];
  ongoingGames: GameResultStarted[];
  lastScoreUpdateTime: number;
  rank: number;
}
