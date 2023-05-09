import { useGames } from "@/context/GamesContext";
import { useMemo } from "react";

const useAwards = () => {
  const { scoreboard } = useGames();

  const rankers = useMemo(() => {
    const ret = scoreboard.filter((x) => !x.exclude).slice(0, 3);
    scoreboard
      .filter((x) => !x.exclude)
      .slice(3)
      .forEach((x) => {
        if (x.rank === ret[2].rank) {
          ret.push(x);
        }
      });
    return ret;
  }, [scoreboard]);

  const most1st = useMemo(() => {
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        count: x.scoreEntries.filter((x) => "game" in x && x.result.rank === 1)
          .length,
        user: x,
      }))
      .filter(
        (x) => !rankers.find((y) => y.handle === x.handle) && !x.user.exclude
      )
      .sort((a, b) => b.count - a.count);
    return ret;
  }, [rankers, scoreboard]);

  const mostLast = useMemo(() => {
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        count: x.scoreEntries.filter(
          (x) => "game" in x && x.result.rank === x.game.result.length
        ).length,
        user: x,
      }))
      .filter(
        (x) => !rankers.find((y) => y.handle === x.handle) && !x.user.exclude
      )
      .sort((a, b) => b.count - a.count);
    return ret;
  }, [rankers, scoreboard]);

  const longest = useMemo(() => {
    const ret = scoreboard
      .map((x) => ({
        handle: x.handle,
        minutes: x.scoreEntries
          .map((x) => ("game" in x ? x.game.durationMinutes : 0))
          .reduce((a, b) => Math.max(a, b), 0),
        user: x,
      }))
      .filter(
        (x) => !rankers.find((y) => y.handle === x.handle) && !x.user.exclude
      )
      .sort((a, b) => b.minutes - a.minutes);
    return ret;
  }, [rankers, scoreboard]);

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
      .filter(
        (x) => !rankers.find((y) => y.handle === x.handle) && !x.user.exclude
      )
      .sort((a, b) => b.people - a.people);
    return ret;
  }, [rankers, scoreboard]);

  return {
    rankers,
    most1st,
    mostLast,
    longest,
    matched,
  };
};

export default useAwards;
