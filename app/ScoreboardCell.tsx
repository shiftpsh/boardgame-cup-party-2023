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
  current: boolean;
}

const ScoreboardCell = ({ data, current }: Props) => {
  const gameId = data.type === "solves" ? "custom" : data.game.gameId;
  const game = gameById(gameId);
  const elapsedTime =
    data.type === "solves" ? 0 : data.game.finishedAt - data.game.startedAt;

  return (
    <ScoreboardCellWrapper
      style={{
        ...(data.frozen
          ? {
              opacity: 0.5,
            }
          : {}),
        ...(current
          ? {
              boxShadow: "0 0 8px 2px white",
              background: "white",
              opacity: 1,
            }
          : {}),
      }}
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
        {data.frozen ? (
          <Typo description>
            <IconQuestionMark />
          </Typo>
        ) : (
          <AnimatedNumber value={data.score} />
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
            {data.frozen ? (
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
