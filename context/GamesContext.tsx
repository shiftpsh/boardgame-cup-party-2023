import { GameResult } from "@/types/GameResult";
import { db } from "@/utils/database";
import { onValue, ref, set } from "firebase/database";
import {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const defaultFreezeAt = 1683963000000;

interface GamesContextValues {
  games: GameResult[];
  gamesLoaded: boolean;
  freezeAt: number;
  setFreezeAt: (freezeAt: number) => void;
}

export const GamesContext = createContext<GamesContextValues>({
  games: [],
  gamesLoaded: false,
  freezeAt: defaultFreezeAt,
  setFreezeAt: () => {},
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

  return (
    <GamesContext.Provider
      value={{
        games: gamesLoaded && freezeLoaded ? games : [],
        gamesLoaded: gamesLoaded && freezeLoaded,
        freezeAt,
        setFreezeAt,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => useContext(GamesContext);
