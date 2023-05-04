import GAMES from "@/app/games.json";
import styled from "@emotion/styled";
import { Select } from "@solved-ac/ui-react";
import { HTMLAttributes } from "react";
import Emoji from "./Emoji";

const EmojiWrapper = styled.span`
  display: inline-block;
  text-align: center;
  width: 2em;
`;

interface GameItem {
  label: string;
  value: string;
  emoji: string;
}

const SELECT_GAME_ITEMS = GAMES.map((game) => ({
  label: game.name,
  value: game.id,
  emoji: game.emoji,
})).sort((a, b) => {
  if (a.value === "custom") return 1;
  if (b.value === "custom") return -1;
  return a.label.localeCompare(b.label);
}) satisfies GameItem[];

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (gameId: string) => void;
}

const GameSelector = ({ value, onChange, ...rest }: Props) => {
  return (
    <Select
      items={SELECT_GAME_ITEMS}
      value={value}
      render={({ label, emoji }: GameItem) => (
        <span>
          <EmojiWrapper>
            <Emoji emoji={emoji} />
          </EmojiWrapper>
          {label}
        </span>
      )}
      onChange={({ value }: GameItem) => onChange(value)}
      {...rest}
    />
  );
};

export default GameSelector;
