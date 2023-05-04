import styled from "@emotion/styled";
import twemoji from "twemoji";

const url = (emoji: string) =>
  `https://twemoji.maxcdn.com/v/latest/72x72/${emoji}.png`;

const TwemojiWrapper = styled.img`
  height: 1.2em;
  width: 1.2em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.25em;
`;

interface Props {
  emoji: string;
}

const Emoji = ({ emoji }: Props) => {
  return (
    <>
      <TwemojiWrapper
        src={url(twemoji.convert.toCodePoint(emoji))}
        alt={emoji}
      />
    </>
  );
};

export default Emoji;
