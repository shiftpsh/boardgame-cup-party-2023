import { useGames } from "@/context/GamesContext";
import { useEffect, useMemo, useState } from "react";
import { useGranularEffect } from "./useGranularEffect";

interface PhaseUserIn {
  type: "user-in";
}

interface PhaseUserGameIn {
  type: "user-game-in";
  uuid: string;
}

interface PhaseUserGameOut {
  type: "user-game-out";
  uuid: string;
}

interface PhaseUserOut {
  type: "user-out";
}

type PhaseType =
  | PhaseUserIn
  | PhaseUserGameIn
  | PhaseUserGameOut
  | PhaseUserOut;

export interface Phase {
  handle: string;
  phase: PhaseType;
}

const useAwardMode = () => {
  const { scoreboard } = useGames();
  const [awardMode, setAwardMode] = useState(false);
  const [phase, setPhase] = useState<Phase | null>(null);
  const [finishedUsers, setFinishedUsers] = useState<Set<string>>(
    new Set<string>()
  );
  const [finishedUUIDHandles, setFinishedUUIDHandles] = useState<Set<string>>(
    new Set<string>()
  );
  const [renderIndex, setRenderIndex] = useState<Map<string, number>>(
    new Map()
  );

  useEffect(() => {
    setRenderIndex(new Map(scoreboard.map((x, i) => [x.handle, i])));
  }, [scoreboard]);

  const unfrozen = useMemo(() => {
    const rankMap = new Map<string, number>();

    return scoreboard
      .map((s) => {
        const unfrozenGames = s.scoreEntries.map((x) => {
          if (
            "game" in x &&
            finishedUUIDHandles.has([x.game.uuid, s.handle].join(":"))
          ) {
            return { ...x, frozen: false };
          }
          return x;
        });
        const score = unfrozenGames.reduce(
          (acc, x) => acc + (x.frozen ? 0 : x.score),
          0
        );
        return {
          ...s,
          scoreEntries: unfrozenGames,
          score,
        };
      })
      .sort((a, b) =>
        a.score !== b.score
          ? b.score - a.score
          : a.lastScoreUpdateTime - b.lastScoreUpdateTime
      )
      .map((x, i) => {
        const key = `${x.score}-${x.lastScoreUpdateTime}`;
        const rank = rankMap.get(key) ?? i + 1;
        rankMap.set(key, rank);
        return { ...x, rank };
      })
      .sort((a, b) => {
        const aRank = renderIndex.get(a.handle) ?? a.rank;
        const bRank = renderIndex.get(b.handle) ?? b.rank;
        return aRank - bRank;
      });
  }, [finishedUUIDHandles, renderIndex, scoreboard]);

  useGranularEffect(
    () => {
      if (phase?.phase.type === "user-out") {
        setRenderIndex(
          new Map(
            unfrozen
              .sort((a, b) => a.rank - b.rank)
              .map((x, i) => [x.handle, i])
          )
        );
      }
    },
    [phase?.phase.type],
    [unfrozen]
  );

  const { handle: nextHandle } = useMemo(() => {
    const leastRankWithNotFinishedUser = unfrozen.reduce(
      (acc, x) => {
        const userFinished = finishedUsers.has(x.handle);
        if (!userFinished && x.rank > acc.rank) {
          return { rank: x.rank, handle: x.handle };
        }
        if (
          !userFinished &&
          x.rank === acc.rank &&
          x.handle.localeCompare(acc.handle)
        ) {
          return { rank: x.rank, handle: x.handle };
        }
        return acc;
      },
      { rank: 0, handle: "" }
    );
    return leastRankWithNotFinishedUser;
  }, [finishedUsers, unfrozen]);

  const { handle: nextUUIDHandle, uuid: nextUUID } = useMemo(() => {
    const leastRankWithFrozenEntry = unfrozen.reduce(
      (acc, x) => {
        const frozenEntry = x.scoreEntries.find((x) => x.frozen);
        if (frozenEntry && "game" in frozenEntry && x.rank > acc.rank) {
          return {
            rank: x.rank,
            handle: x.handle,
            uuid: frozenEntry.game.uuid,
          };
        }
        if (
          frozenEntry &&
          "game" in frozenEntry &&
          x.rank === acc.rank &&
          x.handle.localeCompare(acc.handle)
        ) {
          return {
            rank: x.rank,
            handle: x.handle,
            uuid: frozenEntry.game.uuid,
          };
        }
        return acc;
      },

      { rank: 0, handle: "", uuid: "" }
    );
    return leastRankWithFrozenEntry;
  }, [unfrozen]);

  const nextPhase = () => {
    if (phase === null) {
      return {
        handle: nextHandle,
        phase: {
          type: "user-in",
        },
      } as const;
    }
    const { handle, phase: phaseType } = phase;
    if (phaseType.type === "user-in") {
      if (nextUUIDHandle === handle) {
        return {
          handle,
          phase: {
            type: "user-game-in",
            uuid: nextUUID,
          },
        } as const;
      } else {
        setFinishedUsers((x) => new Set(x.add(handle)));
        return {
          handle,
          phase: {
            type: "user-out",
          },
        } as const;
      }
    }
    if (phaseType.type === "user-game-in") {
      setFinishedUUIDHandles(
        (x) => new Set(x.add([phaseType.uuid, handle].join(":")))
      );
      return {
        handle,
        phase: {
          type: "user-game-out",
          uuid: phaseType.uuid,
        },
      } as const;
    }
    if (phaseType.type === "user-game-out") {
      if (handle === nextUUIDHandle) {
        return {
          handle,
          phase: {
            type: "user-game-in",
            uuid: nextUUID,
          },
        } as const;
      } else {
        return {
          handle,
          phase: {
            type: "user-out",
          },
        } as const;
      }
    }
    if (phaseType.type === "user-out") {
      if (handle === nextHandle) {
        setFinishedUsers((x) => new Set(x.add(handle)));
        return {
          handle,
          phase: {
            type: "user-out",
          },
        } as const;
      } else {
        return {
          handle: nextHandle,
          phase: {
            type: "user-in",
          },
        } as const;
      }
    }
    throw new Error("unreachable");
  };

  const handleNextPhase = () => {
    console.log("next phase", nextPhase());
    setPhase(nextPhase());
  };

  return {
    awardMode,
    setAwardMode,
    unfrozen,
    phase,
    onNextPhase: handleNextPhase,
    finishedUsers,
  };
};

export default useAwardMode;
