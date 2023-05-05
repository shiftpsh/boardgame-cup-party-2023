"use client";

import GameSelector from "@/component/GameSelector";
import { GameResultRank } from "@/types/GameResult";
import {
    Button,
    Cell,
    Container,
    EmptyStatePlaceholder,
    Row,
    Space,
    Table,
    TableBody,
    TableHead,
    TextField,
    Typo,
} from "@solved-ac/ui-react";
import { useMemo, useRef, useState } from "react";

import GAMES from "@/app/games.json";
import USERS from "@/app/users.json";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/utils/database";
import { clamp } from "@/utils/math";
import { score } from "@/utils/score";
import styled from "@emotion/styled";
import {
    IconAlertTriangle,
    IconInfoCircle,
    IconPlus,
    IconTrash,
} from "@tabler/icons-react";
import { ref, set } from "firebase/database";

const UserButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default function Add() {
  const auth = useAuth();

  const [gameId, setGameId] = useState<string>("terraforming-mars");
  const [minutes, setMinutes] = useState<number>(120);
  const [result, setResult] = useState<GameResultRank[]>([]);
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [adding, setAdding] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const game = useMemo(() => {
    return GAMES.find((x) => x.id === gameId)!;
  }, [gameId]);

  const filteredUsers = useMemo(() => {
    const input = userSearchInput.trim().toLocaleLowerCase();
    if (!input.length) return [];
    return USERS.filter((user) => {
      if (result.find((x) => x.handle === user.handle)) return false;
      if (user.handle.toLocaleLowerCase().includes(input)) return true;
      return false;
    }).sort((a, b) => {
      const sa = a.handle.toLocaleLowerCase().startsWith(input);
      const sb = b.handle.toLocaleLowerCase().startsWith(input);
      if (sa == sb) {
        return a.handle.localeCompare(b.handle);
      } else {
        return sa ? -1 : 1;
      }
    });
  }, [result, userSearchInput]);

  const warnings = useMemo(() => {
    const warns: string[] = [];
    if (result.length < 2) {
      warns.push(`플레이어 수(${result.length}명)가 2명 미만`);
    }
    if (result.length < game.players.min) {
      warns.push(
        `플레이어 수(${result.length}명)가 ${game.name} 권장 최소 플레이어 수(${game.players.min}명)보다 적음`
      );
    }
    if (result.length > game.players.max) {
      warns.push(
        `플레이어 수(${result.length}명)가 ${game.name} 권장 최대 플레이어 수(${game.players.max}명)보다 많음`
      );
    }
    return warns;
  }, [game.name, game.players.max, game.players.min, result.length]);

  const handleAddUser = (handle: string) => {
    if (!inputRef.current) return;
    const user = USERS.find((x) => x.handle === handle);
    if (!user) return;
    setResult((prev) => {
      if (prev.find((x) => x.handle === handle)) return prev;
      return [
        ...prev,
        { handle, rank: prev.length + 1, exclude: user.type === "staff" },
      ];
    });
    setUserSearchInput("");
    inputRef.current.focus();
  };

  const handleRemoveUser = (handle: string) => {
    setResult((prev) =>
      prev
        .filter((x) => x.handle !== handle)
        .map((x, i) => ({ ...x, rank: i + 1 }))
    );
  };

  const handleAddGameResult = async () => {
    if (adding) return;
    setAdding(true);

    const finishedAt = Date.now();

    try {
      await set(ref(db, `games/${gameId}/results/${Date.now()}`), {});
    } catch (e) {}
  };

  if (!auth.isAdmin) {
    return (
      <Container>
        <EmptyStatePlaceholder>관리자가 아닙니다.</EmptyStatePlaceholder>
      </Container>
    );
  }

  return (
    <Container>
      <Space h={64} />
      <Typo h4 as="h2">
        게임
      </Typo>
      <GameSelector
        value={gameId}
        onChange={({ value }) => setGameId(value)}
        fullWidth
      />
      <Space h={8} />
      <Typo h4 as="h2">
        플레이 시간 (분)
      </Typo>
      <TextField<"input">
        placeholder="게임 시간"
        value={minutes.toString()}
        type="number"
        onChange={({ target: { value } }) => {
          const num = Number(value);
          if (Number.isNaN(num)) {
            setMinutes(0);
          } else {
            setMinutes(clamp(Math.floor(num), 0, 1000));
          }
        }}
        fullWidth
      />
      <Space h={16} />
      <Typo h4 as="h2">
        게임 결과{" "}
        <Typo
          description
          style={{
            fontWeight: "normal",
          }}
        >
          <IconInfoCircle /> {result.length}명
        </Typo>
      </Typo>
      <TextField<"input">
        ref={inputRef}
        placeholder="유저 검색"
        value={userSearchInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (filteredUsers.length >= 1) {
              handleAddUser(filteredUsers[0].handle);
            }
          }
        }}
        onChange={({ target: { value } }) => setUserSearchInput(value)}
        fullWidth
      />
      <Space h={16} />
      <UserButtons>
        {filteredUsers.slice(0, 10).map((user) => (
          <Button key={user.handle} onClick={() => handleAddUser(user.handle)}>
            {user.handle}
            {user.type === "staff" && (
              <>
                {" "}
                <Typo description>(스탭)</Typo>
              </>
            )}
          </Button>
        ))}
      </UserButtons>
      <Space h={16} />
      {result.length === 0 ? (
        <EmptyStatePlaceholder>
          게입 결과를 입력하지 않았습니다.
        </EmptyStatePlaceholder>
      ) : (
        <>
          <Table
            fullWidth
            style={{
              tableLayout: "fixed",
            }}
          >
            <TableHead>
              <Row>
                <Cell width="20%">순위</Cell>
                <Cell width="40%">핸들</Cell>
                <Cell width="20%">점수</Cell>
                <Cell width="20%">삭제</Cell>
              </Row>
            </TableHead>
            <TableBody>
              {result.map((user) => (
                <Row key={user.handle}>
                  <Cell
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Typo tabular>{user.rank}위</Typo>
                  </Cell>
                  <Cell
                    style={{
                      verticalAlign: "middle",
                    }}
                  >
                    <Typo ellipsis description={user.exclude}>
                      {user.handle}
                    </Typo>
                  </Cell>
                  <Cell
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <Typo tabular>
                      {user.exclude
                        ? 0
                        : score(
                            result.length,
                            minutes,
                            user.rank
                          ).toLocaleString("en-US")}
                    </Typo>
                  </Cell>
                  <Cell padding="none">
                    <Button
                      onClick={() => handleRemoveUser(user.handle)}
                      fullWidth
                      transparent
                    >
                      <IconTrash />
                    </Button>
                  </Cell>
                </Row>
              ))}
            </TableBody>
          </Table>
          <Space h={32} />
          <Button
            fullWidth
            disabled={adding || warnings.length !== 0}
            onClick={handleAddGameResult}
          >
            <IconPlus /> 기록 ({game.name}, {minutes}분, {result.length}명)
          </Button>
          {warnings.length !== 0 && (
            <>
              <Space h={16} />
              {warnings.map((warning) => (
                <div key={warning}>
                  <Typo error>
                    <IconAlertTriangle /> {warning}
                  </Typo>
                </div>
              ))}
              <Space h={16} />
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Typo
                  description
                  small
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={handleAddGameResult}
                >
                  경고 무시하고 등록하기
                </Typo>
              </div>
            </>
          )}
        </>
      )}
      <Space h={64} />
    </Container>
  );
}
