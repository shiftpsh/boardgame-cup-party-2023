import AnimatedNumber from "@/component/AnimatedNumber";
import Emoji from "@/component/Emoji";
import {
  ScoreboardGameScoreEntry,
  ScoreboardSolveScoreEntry,
} from "@/hooks/useScoreboard";
import { gameById } from "@/utils/game";
import styled from "@emotion/styled";
import { Tooltip, Typo } from "@solved-ac/ui-react";
import { IconQuestionMark } from "@tabler/icons-react";

const ScoreboardCellWrapper = styled.div`
  text-align: right;
`;

interface Props {
  data: ScoreboardGameScoreEntry | ScoreboardSolveScoreEntry;
}

const ScoreboardCell = ({ data }: Props) => {
  const gameId = data.type === "solves" ? "custom" : data.game.gameId;
  const game = gameById(gameId);
  const elapsedTime =
    data.type === "solves" ? 0 : data.game.finishedAt - data.game.startedAt;

  return (
    <ScoreboardCellWrapper
      style={
        data.score === null
          ? {
              opacity: 0.5,
            }
          : {}
      }
    >
      <Typo
        h3
        no-margin
        tabular
        as="span"
        style={{
          fontWeight: "initial",
        }}
      >
        {data.score !== null ? (
          <AnimatedNumber value={data.score} />
        ) : (
          <Typo description>
            <IconQuestionMark />
          </Typo>
        )}
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
            {data.score === null ? (
              <>
                {Math.floor(elapsedTime / 60 / 1000)}
                <Typo small>분</Typo>
              </>
            ) : (
              <>#{data.result.rank}</>
            )}{" "}
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
