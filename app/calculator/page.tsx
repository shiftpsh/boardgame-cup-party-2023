"use client";

import {
  Cell,
  Container,
  Row,
  Select,
  Space,
  Table,
  TableBody,
  TableHead,
  Typo,
} from "@solved-ac/ui-react";
import { useReducer, useState } from "react";

import GAMES from "@/app/games.json";
import AnimatedNumber from "@/component/AnimatedNumber";
import GameSelector from "@/component/GameSelector";
import { rankColor } from "@/styles/colors";
import { clampMinutes, clampPlayerCount } from "@/utils/math";
import { score, scoreWeightByRank, totalScoreWeight } from "@/utils/score";
import styled from "@emotion/styled";
import { IconInfoCircle } from "@tabler/icons-react";

const SELECT_MINUTE_ITEMS = [
  5, 10, 15, 20, 25, 30, 40, 50, 60, 90, 120, 150, 180, 210, 240, 270, 300,
].map((x) => ({
  label: `${x}분`,
  value: x,
}));

const SelectRow = styled.div`
  display: flex;
  gap: 0 8px;
`;

const ScoreValueCellContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  gap: 0 16px;
`;

export default function Calculator() {
  const [playerCount, setPlayerCount] = useState(3);

  const [minutes, setMinutes] = useReducer((state: number, action: number) => {
    return SELECT_MINUTE_ITEMS.reduce(
      (prev, curr) =>
        Math.abs(curr.value - action) < Math.abs(prev.value - action)
          ? curr
          : prev,
      SELECT_MINUTE_ITEMS[0]
    ).value;
  }, 120);

  const [gameId, setGameId] = useReducer((state: string, action: string) => {
    const game = GAMES.find((game) => game.id === action)!;
    setPlayerCount(
      Math.round(
        (clampPlayerCount(game.players.max) +
          clampPlayerCount(game.players.min)) /
          2
      )
    );
    setMinutes(clampMinutes(game.estimatedPlayTime.max));
    return action;
  }, "terraforming-mars");

  const {
    players,
    estimatedPlayTime,
    name: gameName,
  } = GAMES.find((game) => game.id === gameId)!;

  const playersMin = Math.max(2, Math.min(10, players.min));
  const playersMax = Math.max(2, Math.min(10, players.max));

  return (
    <>
      <Space h={64} />
      <Container>
        <SelectRow>
          <GameSelector
            value={gameId}
            onChange={({ value }) => setGameId(value)}
            style={{
              width: "12em",
            }}
          />
          <Select
            items={new Array(playersMax - playersMin + 1)
              .fill(undefined)
              .map((_, x) => ({ value: x + playersMin }))}
            value={playerCount}
            render={({ value: x }: { value: number }) => `${x}인`}
            onChange={({ value: x }: { value: number }) => setPlayerCount(x)}
            style={{
              width: "6em",
            }}
          />
          <Select
            items={SELECT_MINUTE_ITEMS}
            value={minutes}
            render={({ label }: { label: string }) => label}
            onChange={({ value: x }: { value: number }) => setMinutes(x)}
            style={{
              width: "8em",
            }}
          />
        </SelectRow>
        <Space h={16} />
        {gameId !== "custom" && (
          <div>
            <Typo description>
              <IconInfoCircle /> {gameName}의 적정 플레이 인원은{" "}
              {playersMin === playersMax ? (
                <>{playersMin}명</>
              ) : (
                <>
                  {playersMin} &ndash; {playersMax}명
                </>
              )}
              이며, 예상 플레이 시간은 {estimatedPlayTime.min} &ndash;{" "}
              {estimatedPlayTime.max}분입니다.
            </Typo>
          </div>
        )}
        <div>
          <Typo description>
            <IconInfoCircle /> 아래는 예상 점수이며, 실제 점수는 실제 플레이
            시간을 기준으로 계산합니다.
          </Typo>
        </div>
        <Space h={32} />
        <Table fullWidth>
          <TableHead>
            <Row>
              <Cell style={{ width: "20%" }}>순위</Cell>
              <Cell style={{ width: "80%" }}>점수</Cell>
            </Row>
          </TableHead>
          <TableBody>
            {new Array(playerCount).fill(undefined).map((_, x) => (
              <Row
                key={x}
                style={{
                  color: rankColor(x + 1),
                }}
              >
                <Cell>
                  <Typo tabular>{x + 1}위</Typo>
                </Cell>
                <Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  <ScoreValueCellContents>
                    <Typo tabular description>
                      <Typo
                        tabular
                        style={{
                          fontFeatureSettings: "'frac' 1",
                          fontSize: "1.4em",
                          verticalAlign: "-5%",
                          fontWeight: 400 / Math.sqrt(1.4),
                        }}
                      >
                        {scoreWeightByRank(playerCount, x + 1).toLocaleString(
                          "en-US"
                        )}
                        &frasl;
                        {totalScoreWeight(playerCount).toLocaleString("en-US")}
                      </Typo>{" "}
                      &times; {playerCount} &times; {minutes} &times; 10 =
                    </Typo>
                    <Typo tabular h2 no-margin as="span">
                      <AnimatedNumber
                        value={score(playerCount, minutes, x + 1)}
                      />
                    </Typo>
                  </ScoreValueCellContents>
                </Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
      </Container>
      <Space h={64} />
    </>
  );
}
