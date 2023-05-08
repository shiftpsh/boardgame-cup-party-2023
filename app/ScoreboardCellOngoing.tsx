import Emoji from "@/component/Emoji";
import OngoingIcon from "@/component/OngoingIcon";
import useElapsedTime from "@/hooks/useElapsedTime";
import { GameResultStarted } from "@/types/GameResult";
import { gameById } from "@/utils/game";
import styled from "@emotion/styled";
import { Tooltip, Typo } from "@solved-ac/ui-react";

const ScoreboardCellWrapper = styled.div`
  text-align: right;
`;

interface Props {
  data: GameResultStarted;
}

const ScoreboardCellOngoing = ({ data }: Props) => {
  const { gameId } = data;
  const game = gameById(gameId);
  const elapsedTime = useElapsedTime(data.startedAt);

  return (
    <ScoreboardCellWrapper>
      <Typo
        h3
        no-margin
        tabular
        description
        as="span"
        style={{
          fontWeight: "initial",
        }}
      >
        <OngoingIcon />
        &nbsp;
      </Typo>
      <Typo description tabular>
        {Math.floor(elapsedTime / 60 / 1000)}
        <Typo small>분</Typo>{" "}
        <Tooltip title={game.name}>
          <Emoji emoji={game.emoji} />
        </Tooltip>
      </Typo>
    </ScoreboardCellWrapper>
  );
};

export default ScoreboardCellOngoing;
