import USERS from "@/app/users.json";
import {
  GameResultFinished,
  GameResultRank,
  GameResultStarted,
} from "@/types/GameResult";
import { score } from "@/utils/score";
import { useMemo } from "react";
import useFreezeTime from "./useFreezeTime";
import useGames from "./useGames";

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
  rank: number;
}

const useScoreboard = () => {
  const games = useGames();
  const [freezeTime] = useFreezeTime();

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
          frozen: false,
        },
        ...finished.map((game) => {
          const player = game.result.find((x) => x.handle === handle)!;
          const frozen = freezeTime < game.finishedAt;
          const resultScore = score(
            game.result.length,
            game.durationMinutes,
            player.rank
          );

          return {
            type: "game",
            score: player.exclude ? 0 : resultScore,
            game,
            result: player,
            frozen,
          } as const;
        }),
      ];

      const scoreTotal = scoreEntries.reduce(
        (acc, { score, frozen }) => acc + (frozen ? 0 : score),
        0
      );

      return {
        handle,
        exclude: type === "staff",
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
  }, [freezeTime, games]);

  return users;
};

export default useScoreboard;
