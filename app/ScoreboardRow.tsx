import AnimatedNumber from "@/component/AnimatedNumber";
import OngoingIcon from "@/component/OngoingIcon";
import { Phase } from "@/hooks/useAwardMode";
import { theme } from "@/styles/theme";
import { ScoreboardUser } from "@/types/Scoreboard";
import { ThemeProvider, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { IconQuestionMark } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { mix } from "polished";
import { useEffect, useRef } from "react";
import ScoreboardCell from "./ScoreboardCell";
import ScoreboardCellOngoing from "./ScoreboardCellOngoing";

const ScoreboardRowWrapper = styled(motion.tr)`
  position: relative;
  white-space: nowrap;
  word-break: keep-all;
  height: 96px;
  direction: ltr;
  background: ${({ theme }) => theme.color.background.page};
  @media (min-width: 768px) {
    height: 72px;
  }
`;

const ScoreboardHandle = styled.td`
  position: sticky;
  padding: 16px;
  vertical-align: middle;
  left: 0;
  width: 216px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.background.page},
    ${({ theme }) => theme.color.background.page} 80%,
    transparent
  );
`;

const ScoreboardHandleWrapper = styled.div`
  display: flex;
`;

const ScoreboardScore = styled.td`
  position: sticky;
  padding: 16px;
  vertical-align: middle;
  right: 0;
  width: 192px;
  text-align: right;
  background: white;
`;

const ScoreboardScoreWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ScoreboardContentsWide = styled.td`
  vertical-align: middle;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ScoreboardContentsNarrow = styled.tr`
  direction: ltr;
  vertical-align: middle;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ScoreboardContentsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  gap: 0 24px;
`;

const Rank = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  font-size: 0.9em;
  font-weight: 800;
  background: ${({ theme }) => theme.color.text.primary.dark};
  color: ${({ theme }) => theme.color.text.primary.light};
`;

const useColor = (phase: Phase | null, finished: boolean) => {
  const theme = useTheme();
  const { type } = phase?.phase || {};
  if (!type && finished) {
    return mix(0.2, theme.color.text.secondary.main, "white");
  }
  if (
    type === "user-in" ||
    type === "user-game-in" ||
    type === "user-game-out"
  ) {
    return mix(0.2, theme.color.status.warn, "white");
  }
  if (type === "user-out") {
    return mix(0.2, theme.color.solvedAc, "white");
  }
  return theme.color.background.page;
};

interface Props {
  user: ScoreboardUser;
  finished: boolean;
  phase: Phase | null;
}

const ScoreboardRow = ({ user, phase, finished }: Props) => {
  const color = useColor(phase, finished);

  const ref = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (phase?.phase?.type === "user-in") {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [phase?.phase?.type]);

  return (
    <ThemeProvider
      theme={{
        color: {
          ...theme.color,
          background: {
            ...theme.color.background,
            page: color,
          },
        },
      }}
    >
      <ScoreboardRowWrapper
        layoutId={user.handle}
        ref={ref}
        style={{
          zIndex: phase?.phase?.type === "user-out" ? 10000 : 0,
        }}
      >
        <ScoreboardScore>
          <ScoreboardScoreWrapper>
            {user.ongoingGames.length !== 0 && (
              <>
                <Typo description>
                  <OngoingIcon />
                </Typo>
                <Space w={8} />
              </>
            )}
            {user.scoreEntries.find((x) => x.score === null) ? (
              <>
                <Typo description>
                  <IconQuestionMark />
                </Typo>
                <Space w={8} />
              </>
            ) : null}
            <Typo h2 no-margin tabular as="span">
              <AnimatedNumber value={user.score} />
            </Typo>
          </ScoreboardScoreWrapper>
        </ScoreboardScore>
        <ScoreboardContentsWide>
          <ScoreboardContentsWrapper>
            {user.scoreEntries.map((entry) => (
              <ScoreboardCell
                data={entry}
                current={
                  phase?.phase?.type === "user-game-in" &&
                  entry.type === "game" &&
                  phase.phase.uuid === entry.game.uuid
                }
                key={entry.type === "solves" ? "solves" : entry.game.uuid}
              />
            ))}
            {user.ongoingGames.map((game) => (
              <ScoreboardCellOngoing key={game.gameId} data={game} />
            ))}
          </ScoreboardContentsWrapper>
        </ScoreboardContentsWide>
        <ScoreboardHandle>
          <ScoreboardHandleWrapper>
            <Rank>
              <AnimatedNumber value={user.rank} />
            </Rank>
            <Space w={8} />
            <Typo ellipsis>
              <span>{user.handle}</span>
              {user.exclude && <Typo description> (스탭)</Typo>}
            </Typo>
          </ScoreboardHandleWrapper>
        </ScoreboardHandle>
      </ScoreboardRowWrapper>
      <ScoreboardContentsNarrow>
        <td
          colSpan={2}
          style={{
            paddingBottom: 16,
            paddingRight: 16,
          }}
        >
          <ScoreboardContentsWrapper>
            {user.scoreEntries.map((entry) => (
              <ScoreboardCell
                data={entry}
                current={
                  phase?.phase?.type === "user-game-in" &&
                  entry.type === "game" &&
                  phase.phase.uuid === entry.game.uuid
                }
                key={entry.type === "solves" ? "solves" : entry.game.uuid}
              />
            ))}
            {user.ongoingGames.map((game) => (
              <ScoreboardCellOngoing key={game.gameId} data={game} />
            ))}
          </ScoreboardContentsWrapper>
        </td>
      </ScoreboardContentsNarrow>
    </ThemeProvider>
  );
};

export default ScoreboardRow;
