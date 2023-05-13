import USERS from "@/app/users.json";
import { GameResult, GameResultFinished } from "@/types/GameResult";
import {
  ScoreboardGameScoreEntry,
  ScoreboardSolveScoreEntry,
  ScoreboardUser,
} from "@/types/Scoreboard";
import { db } from "@/utils/database";
import { score } from "@/utils/score";
import { onValue, ref, set } from "firebase/database";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const defaultFreezeAt = 1683963000000;

interface GamesContextValues {
  games: GameResult[];
  gamesLoaded: boolean;
  freezeAt: number;
  setFreezeAt: (freezeAt: number) => void;
  scoreboard: ScoreboardUser[];
}

export const GamesContext = createContext<GamesContextValues>({
  games: [],
  gamesLoaded: false,
  freezeAt: defaultFreezeAt,
  setFreezeAt: () => {},
  scoreboard: [],
});

export const GamesContextProvider = ({ children }: PropsWithChildren) => {
  const [gamesLoaded, setGamesLoaded] = useState<boolean>(false);
  const [games, setGames] = useState<GameResult[]>([]);
  const [freezeLoaded, setFreezeLoaded] = useState<boolean>(false);
  const [freezeAt, setFreezeTimeAt] = useState<number>(defaultFreezeAt);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, "games"), (snapshot) => {
      if (snapshot.exists()) {
        const games = snapshot.toJSON() as { [key: string]: GameResult };
        setGames(
          Object.values(games).map((x) => ({
            ...x,
            players: Object.values(x.players),
            ...("result" in x ? { result: Object.values(x.result) } : {}),
          }))
        );
        setGamesLoaded(true);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, "freeze"), (snapshot) => {
      setFreezeLoaded(true);
      if (snapshot.exists()) {
        setFreezeTimeAt(snapshot.val() as number);
      }
    });
    return () => unsubscribe();
  }, []);

  const setFreezeAt = async (time: number) => {
    await set(ref(db, "freeze"), time);
  };

  const users: ScoreboardUser[] = useMemo(() => {
    const rankMap = new Map<string, number>();

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
          score: solves * 50,
          solves,
          frozen: false,
        },
        ...finished.map((game) => {
          const player = game.result.find((x) => x.handle === handle)!;
          const frozen = freezeAt < game.finishedAt;
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
        lastScoreUpdateTime: Math.min(
          1683968400000,
          Math.max(0, ...finished.map((x) => x.finishedAt))
        ),
      };
    })
      .sort((a, b) =>
        a.score !== b.score
          ? b.score - a.score
          : a.lastScoreUpdateTime - b.lastScoreUpdateTime
      )
      .map((user, index) => {
        const key = `${user.score}-${user.lastScoreUpdateTime}`;
        const rank = rankMap.get(key) ?? index + 1;
        rankMap.set(key, rank);
        return {
          ...user,
          rank,
        };
      });
  }, [freezeAt, games]);

  return (
    <GamesContext.Provider
      value={{
        games: gamesLoaded && freezeLoaded ? games : [],
        gamesLoaded: gamesLoaded && freezeLoaded,
        freezeAt,
        setFreezeAt,
        scoreboard: users,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => useContext(GamesContext);
