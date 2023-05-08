import AnimatedNumber from "@/component/AnimatedNumber";
import { ScoreboardUser } from "@/hooks/useScoreboard";
import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import ScoreboardCell from "./ScoreboardCell";

const ScoreboardRowWrapper = styled.tr`
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
      <ScoreboardRowWrapper>
        <ScoreboardHandle>
          <ScoreboardHandleWrapper>
            <Rank>{user.rank}</Rank>
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
          </ScoreboardContentsWrapper>
        </ScoreboardContentsWide>
        <ScoreboardScore>
          <Typo h2 no-margin tabular as="span">
            <AnimatedNumber value={user.score} />
          </Typo>
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
          </ScoreboardContentsWrapper>
        </td>
      </ScoreboardContentsNarrow>
    </>
  );
};

export default ScoreboardRow;
