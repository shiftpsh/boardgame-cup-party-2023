import AnimatedNumber from "@/component/AnimatedNumber";
import OngoingIcon from "@/component/OngoingIcon";
import { ScoreboardUser } from "@/hooks/useScoreboard";
import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { motion } from "framer-motion";
import ScoreboardCell from "./ScoreboardCell";
import ScoreboardCellOngoing from "./ScoreboardCellOngoing";

const ScoreboardRowWrapper = styled(motion.tr)`
  white-space: nowrap;
  word-break: keep-all;
  height: 96px;
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
  width: 172px;
  text-align: right;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.color.background.page},
    ${({ theme }) => theme.color.background.page} 80%,
    transparent
  );
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

interface Props {
  user: ScoreboardUser;
}

const ScoreboardRow = ({ user }: Props) => {
  return (
    <>
      <ScoreboardRowWrapper layoutId={user.handle}>
        <ScoreboardHandle>
          <ScoreboardHandleWrapper>
            <Rank>
              <AnimatedNumber value={user.rank} />
            </Rank>
            <Space w={8} />
            <Typo ellipsis>
              <span>{user.handle}</span>
            </Typo>
          </ScoreboardHandleWrapper>
        </ScoreboardHandle>
        <ScoreboardContentsWide>
          <ScoreboardContentsWrapper>
            {user.scoreEntries.map((entry) => (
              <ScoreboardCell
                data={entry}
                key={entry.type === "solves" ? "solves" : entry.game.uuid}
              />
            ))}
            {user.ongoingGames.map((game) => (
              <ScoreboardCellOngoing key={game.gameId} data={game} />
            ))}
          </ScoreboardContentsWrapper>
        </ScoreboardContentsWide>
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
            <Typo h2 no-margin tabular as="span">
              <AnimatedNumber value={user.score} />
            </Typo>
          </ScoreboardScoreWrapper>
        </ScoreboardScore>
      </ScoreboardRowWrapper>
      <ScoreboardContentsNarrow>
        <td
          colSpan={2}
          style={{
            paddingBottom: 16,
          }}
        >
          <ScoreboardContentsWrapper>
            {user.scoreEntries.map((entry) => (
              <ScoreboardCell
                data={entry}
                key={entry.type === "solves" ? "solves" : entry.game.uuid}
              />
            ))}
            {user.ongoingGames.map((game) => (
              <ScoreboardCellOngoing key={game.gameId} data={game} />
            ))}
          </ScoreboardContentsWrapper>
        </td>
      </ScoreboardContentsNarrow>
    </>
  );
};

export default ScoreboardRow;
