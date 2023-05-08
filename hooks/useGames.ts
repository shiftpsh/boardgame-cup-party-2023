import { GameResult } from "@/types/GameResult";
import { db } from "@/utils/database";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useGames = () => {
  const [games, setGames] = useState<GameResult[]>([]);

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
      }
    });
    return () => unsubscribe();
  }, []);

  return games;
};

export default useGames;
