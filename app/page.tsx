"use client";

import { useAuth } from "@/context/AuthContext";
import useAwardMode from "@/hooks/useAwardMode";
import useElapsedTime from "@/hooks/useElapsedTime";
import useFreezeTime from "@/hooks/useFreezeTime";
import { Divider, Space, Typo } from "@solved-ac/ui-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import GamePlayingItem from "./GamePlayingItem";
import ScoreboardRow from "./ScoreboardRow";

export default function Home() {
  const auth = useAuth();
  const {
    awardMode,
    setAwardMode,
    unfrozen: scoreboard,
    phase,
    onNextPhase,
    finishedUsers,
  } = useAwardMode();
  const [freezeTime] = useFreezeTime();
  const elapsedTime = useElapsedTime(freezeTime);
  const secondsUntilFreeze = Math.floor(-elapsedTime / 1000);

  const searchParams = useSearchParams();
  const awardModeFlag = (searchParams.get("award") || "") === "true";

  useEffect(() => {
    if (awardModeFlag && auth.isAdmin) {
      setAwardMode(awardModeFlag);
    } else {
      setAwardMode(false);
    }
  }, [auth.isAdmin, awardModeFlag, setAwardMode]);

  useEffect(() => {
    if (!awardMode) return undefined;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "a") {
        e.preventDefault();
        onNextPhase();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [awardMode, onNextPhase]);

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
        {60 * 60 >= secondsUntilFreeze && secondsUntilFreeze > 60 && (
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
          <AnimatePresence>
            <motion.tbody
              layout
              layoutRoot
              transition={{
                layout: {
                  duration: 1,
                  delay: 2,
                },
              }}
            >
              {scoreboard.map((row) => (
                <React.Fragment key={row.handle}>
                  <ScoreboardRow
                    user={row}
                    finished={finishedUsers.has(row.handle)}
                    phase={phase?.handle === row.handle ? phase : null}
                  />
                  <tr>
                    <td colSpan={3}>
                      <Divider margin="none" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </motion.tbody>
          </AnimatePresence>
        </table>
      </div>
    </>
  );
}
