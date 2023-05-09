"use client";

import OngoingIcon from "@/component/OngoingIcon";
import { useAuth } from "@/context/AuthContext";
import { useGames } from "@/context/GamesContext";
import useAwardMode from "@/hooks/useAwardMode";
import useElapsedTime from "@/hooks/useElapsedTime";
import {
  Divider,
  EmptyStatePlaceholder,
  Space,
  Typo,
} from "@solved-ac/ui-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import GamePlayingItem from "./GamePlayingItem";
import ScoreboardRow from "./ScoreboardRow";

export default function Home() {
  const auth = useAuth();
  const { gamesLoaded, freezeAt } = useGames();

  const {
    awardMode,
    setAwardMode,
    unfrozen: scoreboard,
    phase,
    onNextPhase,
    finishedUsers,
  } = useAwardMode();
  const elapsedTime = useElapsedTime(freezeAt);
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
      if (e.key === " ") {
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

  if (!gamesLoaded) {
    return (
      <>
        <Space h={64} />
        <EmptyStatePlaceholder
          style={{
            fontSize: "4em",
          }}
        >
          <OngoingIcon />
        </EmptyStatePlaceholder>
        <Space h={64} />
      </>
    );
  }

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
                ease: "easeInOut",
                duration: 1,
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
