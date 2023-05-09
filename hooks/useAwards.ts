import { useGames } from "@/context/GamesContext";
import { useMemo } from "react";

const useAwards = () => {
  const { scoreboard } = useGames();

  const rankers = useMemo(() => {
    const rankMap = new Map<string, number>();
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        score: x.scoreEntries.reduce((a, b) => a + b.score, 0),
        lastScoreUpdateTime: x.lastScoreUpdateTime,
        user: x,
      }))
      .filter((x) => !x.user.exclude)
      .sort((a, b) =>
        a.score === b.score
          ? a.lastScoreUpdateTime - b.lastScoreUpdateTime
          : b.score - a.score
      )
      .map((x, i) => {
        const key = `${x.score}-${x.lastScoreUpdateTime}`;
        if (rankMap.has(key)) {
          return {
            ...x,
            rank: rankMap.get(key)!,
          };
        }
        const ret = {
          ...x,
          rank: i + 1,
        };
        rankMap.set(key, i + 1);
        return ret;
      });

    return ret;
  }, [scoreboard]);

  const rankMap = useMemo(() => {
    const ret = new Map<string, number>();
    rankers.forEach((x) => {
      ret.set(x.handle, x.rank);
    });
    return ret;
  }, [rankers]);

  const most1st = useMemo(() => {
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        count: x.scoreEntries.filter((x) => "game" in x && x.result.rank === 1)
          .length,
        user: x,
      }))
      .filter((x) => !x.user.exclude)
      .sort((a, b) =>
        a.count === b.count
          ? rankMap.get(a.handle)! - rankMap.get(b.handle)!
          : b.count - a.count
      );
    return ret;
  }, [rankMap, scoreboard]);

  const mostLast = useMemo(() => {
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        count: x.scoreEntries.filter(
          (x) => "game" in x && x.result.rank === x.game.result.length
        ).length,
        user: x,
      }))
      .filter((x) => !x.user.exclude)
      .sort((a, b) =>
        a.count === b.count
          ? rankMap.get(a.handle)! - rankMap.get(b.handle)!
          : b.count - a.count
      );
    return ret;
  }, [rankMap, scoreboard]);

  const longest = useMemo(() => {
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        minutes: x.scoreEntries
          .map((x) => ("game" in x ? x.game.durationMinutes : 0))
          .reduce((a, b) => Math.max(a, b), 0),
        user: x,
      }))
      .filter((x) => !x.user.exclude)
      .sort((a, b) =>
        a.minutes === b.minutes
          ? rankMap.get(a.handle)! - rankMap.get(b.handle)!
          : b.minutes - a.minutes
      );
    return ret;
  }, [rankMap, scoreboard]);

  const matched = useMemo(() => {
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        people: new Set(
          x.scoreEntries.flatMap((x) =>
            "game" in x ? x.game.result.map((x) => x.handle) : []
          )
        ).size,
        user: x,
      }))
      .filter((x) => !x.user.exclude)
      .sort((a, b) =>
        a.people === b.people
          ? rankMap.get(a.handle)! - rankMap.get(b.handle)!
          : b.people - a.people
      );
    return ret;
  }, [rankMap, scoreboard]);

  return {
    rankers,
    most1st,
    mostLast,
    longest,
    matched,
  };
};

export default useAwards;
