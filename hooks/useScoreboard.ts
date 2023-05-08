import USERS from "@/app/users.json";
import {
  GameResultFinished,
  GameResultRank,
  GameResultStarted,
} from "@/types/GameResult";
import { score } from "@/utils/score";
import { useMemo } from "react";
import useGames from "./useGames";

export interface ScoreboardGameScoreEntry {
  type: "game";
  score: number;
  game: GameResultFinished;
  result: GameResultRank;
}

export interface ScoreboardSolveScoreEntry {
  type: "solves";
  score: number;
  solves: number;
}

export interface ScoreboardUser {
  handle: string;
  score: number;
  scoreEntries: (ScoreboardGameScoreEntry | ScoreboardSolveScoreEntry)[];
  ongoingGames: GameResultStarted[];
  rank: number;
}

const useScoreboard = () => {
  const games = useGames();

  const users: ScoreboardUser[] = useMemo(() => {
    const rankMap = new Map<number, number>();

    return USERS.map(({ handle, type, solves }) => {
      const userGames = games
        .filter((game) => game.players.includes(handle))
        .sort((a, b) => a.startedAt - b.startedAt);
      const ongoing = userGames.filter(
        (game) => "finishedAt" in game === false
      );
      const finished: GameResultFinished[] = userGames.filter(
        (game) => "finishedAt" in game
      ) as GameResultFinished[];

      const scoreEntries: (
        | ScoreboardGameScoreEntry
        | ScoreboardSolveScoreEntry
      )[] = [
        {
          type: "solves",
          score: solves * 10,
          solves,
        },
        ...finished.map((game) => {
          const player = game.result.find((x) => x.handle === handle)!;
          return {
            type: "game",
            score: player.exclude
              ? 0
              : score(game.result.length, game.durationMinutes, player.rank),
            game,
            result: player,
          } as const;
        }),
      ];

      const scoreTotal = scoreEntries.reduce(
        (acc, { score }) => acc + score,
        0
      );

      return {
        handle,
        score: scoreTotal,
        scoreEntries,
        ongoingGames: ongoing,
        rank: 0,
      };
    })
      .sort((a, b) => b.score - a.score)
      .map((user, index) => {
        const rank = rankMap.get(user.score) ?? index + 1;
        rankMap.set(user.score, rank);
        return {
          ...user,
          rank,
        };
      });
  }, [games]);

  return users;
};

export default useScoreboard;
