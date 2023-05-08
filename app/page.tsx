"use client";

import useScoreboard from "@/hooks/useScoreboard";
import { Divider } from "@solved-ac/ui-react";
import { motion } from "framer-motion";
import React from "react";
import ScoreboardRow from "./ScoreboardRow";

export default function Home() {
  const scoreboard = useScoreboard();

  return (
    <>
      <div
        style={{
          position: "relative",
          overflowX: "auto",
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
