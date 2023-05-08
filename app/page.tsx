"use client";

import useScoreboard from "@/hooks/useScoreboard";
import { gameById } from "@/utils/game";
import { Divider } from "@solved-ac/ui-react";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import GamePlayingItem from "./GamePlayingItem";
import ScoreboardRow from "./ScoreboardRow";

export default function Home() {
  const scoreboard = useScoreboard();

  const gamesPlaying = useMemo(
    () =>
      Array.from(new Set(scoreboard.flatMap((row) => row.ongoingGames))).sort(
        (a, b) => a.startedAt - b.startedAt
      ),
    [scoreboard]
  );

  return (
    <>
      {gamesPlaying.length !== 0 && (
        <div
          style={{
            padding: 16,
            overflowX: "auto",
          }}
        >
          현재 플레이 중:{" "}
          {gamesPlaying.map((data, i) => {
            const { gameId } = data;
            const game = gameById(data.gameId);
            return (
              <React.Fragment key={gameId}>
                {i !== 0 && ", "}
                <GamePlayingItem data={data} />
              </React.Fragment>
            );
          })}
        </div>
      )}
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
