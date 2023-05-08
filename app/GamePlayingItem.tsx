import Emoji from "@/component/Emoji";
import useElapsedTime from "@/hooks/useElapsedTime";
import { GameResultStarted } from "@/types/GameResult";
import { gameById } from "@/utils/game";
import { Typo } from "@solved-ac/ui-react";

interface Props {
  data: GameResultStarted;
}

const GamePlayingItem = ({ data }: Props) => {
  const elapsedTime = useElapsedTime(data.startedAt);
  const game = gameById(data.gameId);

  return (
    <span>
      <Emoji emoji={game.emoji} /> <span>{game.name}</span>{" "}
      <Typo description>
        {Math.floor(elapsedTime / 60 / 1000)}
        <Typo small>분</Typo>
      </Typo>
    </span>
  );
};

export default GamePlayingItem;
