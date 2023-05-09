"use client";

import useElapsedTime from "@/hooks/useElapsedTime";
import useFreezeTime from "@/hooks/useFreezeTime";
import useScoreboard from "@/hooks/useScoreboard";
import { Divider, Space, Typo } from "@solved-ac/ui-react";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import GamePlayingItem from "./GamePlayingItem";
import ScoreboardRow from "./ScoreboardRow";

export default function Home() {
  const scoreboard = useScoreboard();
  const [freezeTime] = useFreezeTime();
  const elapsedTime = useElapsedTime(freezeTime);
  const secondsUntilFreeze = Math.floor(-elapsedTime / 1000);

  const gamesPlaying = useMemo(
    () =>
      Array.from(new Set(scoreboard.flatMap((row) => row.ongoingGames))).sort(
        (a, b) => a.startedAt - b.startedAt
      ),
    [scoreboard]
  );

  return (
    <>
      <div
        style={{
          padding: 16,
          overflowX: "auto",
        }}
      >
        {gamesPlaying.length !== 0 && (
          <>
            현재 플레이 중:{" "}
            {gamesPlaying.map((data, i) => {
              const { gameId } = data;
              return (
                <React.Fragment key={gameId}>
                  {i !== 0 && ", "}
                  <GamePlayingItem data={data} />
                </React.Fragment>
              );
            })}
          </>
        )}
        <Space h={8} />
        {120 >= secondsUntilFreeze && secondsUntilFreeze > 60 && (
          <>
            <Typo description tabular>
              {Math.floor(secondsUntilFreeze / 60)}분 후 프리즈
            </Typo>
          </>
        )}
        {60 >= secondsUntilFreeze && secondsUntilFreeze > 0 && (
          <>
            <Typo success tabular>
              <b>{secondsUntilFreeze}초 후 프리즈</b>
            </Typo>
          </>
        )}
        {secondsUntilFreeze <= 0 && (
          <>
            <Typo success tabular>
              <b>스코어보드 프리즈됨</b>
            </Typo>
          </>
        )}
      </div>
      <div
        style={{
          position: "relative",
          overflowX: "auto",
          direction: "rtl",
        }}
      >
        <table
          style={{
            width: "100%",
          }}
        >
          <motion.tbody layout>
            {scoreboard.map((row) => (
              <React.Fragment key={row.handle}>
                <ScoreboardRow user={row} />
                <tr>
                  <td colSpan={3}>
                    <Divider margin="none" />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </motion.tbody>
        </table>
      </div>
    </>
  );
}
