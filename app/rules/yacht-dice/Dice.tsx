"use client";

import styled from "@emotion/styled";
import { Tooltip } from "@solved-ac/ui-react";

const DiceContainer = styled.span`
  position: relative;
  width: 2.4em;
  height: 2.4em;
  border-radius: 0.2em;
  border: ${({ theme }) => theme.styles.border()};
  box-shadow: ${({ theme }) => theme.styles.shadow(undefined, 8)};
  background-color: #fffef8;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`;

const DiceEye = styled.span`
  position: absolute;
  width: 0.4em;
  height: 0.4em;
  border-radius: 0.2em;
  background-color: #000;
`;

export const Dices = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
`;

const DICE_EYE_LAYOUT: number[][] = [
  [2, 3, 4, 5, 6],
  [],
  [4, 5, 6],
  [6],
  [1, 3, 5],
  [6],
  [4, 5, 6],
  [],
  [2, 3, 4, 5, 6],
];

interface DiceProps {
  value: number;
  hide?: boolean;
}

const Dice = ({ value, hide }: DiceProps) => {
  return (
    <Tooltip title={value}>
      <DiceContainer
        style={
          hide
            ? {
                opacity: 0.2,
              }
            : {}
        }
      >
        {new Array(9)
          .fill(0)
          .map((_, i) => i)
          .filter((i) => DICE_EYE_LAYOUT[i].includes(value))
          .map((i) => ({
            x: i % 3,
            y: Math.floor(i / 3),
          }))
          .map(({ x, y }, i) => (
            <DiceEye
              key={i}
              style={{
                left: `${0.35 + x * 0.6}em`,
                top: `${0.35 + y * 0.6}em`,
              }}
            />
          ))}
      </DiceContainer>
    </Tooltip>
  );
};

export default Dice;
