import AnimatedNumber from "@/component/AnimatedNumber";
import Emoji from "@/component/Emoji";
import {
    ScoreboardGameScoreEntry,
    ScoreboardSolveScoreEntry,
} from "@/hooks/useScoreboard";
import { gameById } from "@/utils/game";
import styled from "@emotion/styled";
import { Tooltip, Typo } from "@solved-ac/ui-react";

const ScoreboardCellWrapper = styled.div`
  text-align: right;
`;

interface Props {
  data: ScoreboardGameScoreEntry | ScoreboardSolveScoreEntry;
}

const ScoreboardCell = ({ data }: Props) => {
  const gameId = data.type === "solves" ? "custom" : data.game.gameId;
  const game = gameById(gameId);

  return (
    <ScoreboardCellWrapper>
      <Typo
        h3
        no-margin
        tabular
        as="span"
        style={{
          fontWeight: "initial",
        }}
      >
        <AnimatedNumber value={data.score} />
      </Typo>
      <Typo description>
        {data.type === "solves" ? (
          <>
            ={data.solves}{" "}
            <Tooltip title="보드게임컵 솔브 수">
              <Emoji emoji="🏆" />
            </Tooltip>
          </>
        ) : (
          <>
            #{data.result.rank}{" "}
            <Tooltip title={game.name}>
              <Emoji emoji={game.emoji} />
            </Tooltip>
          </>
        )}
      </Typo>
    </ScoreboardCellWrapper>
  );
};

export default ScoreboardCell;
