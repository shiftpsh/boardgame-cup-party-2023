"use client";

import GameSelector from "@/component/GameSelector";
import { GameResultStarted } from "@/types/GameResult";
import {
  Button,
  Cell,
  Container,
  EmptyStatePlaceholder,
  Row,
  Space,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TextField,
  Typo,
} from "@solved-ac/ui-react";
import { useMemo, useRef, useState } from "react";

import USERS from "@/app/users.json";
import ElapsedTime from "@/component/ElapsedTime";
import Emoji from "@/component/Emoji";
import { useAuth } from "@/context/AuthContext";
import { useSnackbar } from "@/context/SnackbarContext";
import useGames from "@/hooks/useGames";
import { db } from "@/utils/database";
import { gameById } from "@/utils/game";
import styled from "@emotion/styled";
import {
  IconAlertTriangle,
  IconEdit,
  IconInfoCircle,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { FirebaseError } from "firebase/app";
import { ref, set } from "firebase/database";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const UserButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default function Add() {
  const auth = useAuth();
  const snackbar = useSnackbar();
  const games = useGames();

  const [gameId, setGameId] = useState<string>("terraforming-mars");
  const [players, setPlayers] = useState<string[]>([]);
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [adding, setAdding] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const ongoingGames: GameResultStarted[] = useMemo(() => {
    return games
      .filter((x) => !("finishedAt" in x))
      .sort((a, b) => b.startedAt - a.startedAt);
  }, [games]);

  const game = gameById(gameId);

  const filteredUsers = useMemo(() => {
    const input = userSearchInput.trim().toLocaleLowerCase();
    if (!input.length) return [];
    return USERS.filter((user) => {
      if (players.find((x) => x === user.handle)) return false;
      const alreadyPlaying = ongoingGames.find((x) =>
        x.players.includes(user.handle)
      );
      if (alreadyPlaying) return false;
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
  }, [ongoingGames, players, userSearchInput]);

  const warnings = useMemo(() => {
    const warns: string[] = [];
    if (players.length < 2) {
      warns.push(`플레이어 수(${players.length}명)가 2명 미만`);
    }
    if (players.length < game.players.min) {
      warns.push(
        `플레이어 수(${players.length}명)가 ${game.name} 권장 최소 플레이어 수(${game.players.min}명)보다 적음`
      );
    }
    if (players.length > game.players.max) {
      warns.push(
        `플레이어 수(${players.length}명)가 ${game.name} 권장 최대 플레이어 수(${game.players.max}명)보다 많음`
      );
    }
    if (ongoingGames.find((x) => x.gameId === gameId)) {
      warns.push(`진행 중인 ${game.name} 게임이 있음`);
    }
    players.forEach((player) => {
      const alreadyPlaying = ongoingGames.find((x) =>
        x.players.includes(player)
      );
      if (alreadyPlaying) {
        warns.push(
          `${player}님이 이미 ${
            gameById(alreadyPlaying.gameId).name
          } 게임을 진행 중`
        );
      }
    });
    const playerLastGames = players.map((player) => {
      const lastGames = games
        .filter((x) => "finishedAt" in x)
        .filter((x) => x.players.includes(player))
        .sort((a, b) => b.startedAt - a.startedAt);
      if (lastGames.length > 0) {
        return { player, lastGame: lastGames[0], uuid: lastGames[0].uuid };
      } else {
        return { player, lastGame: null, uuid: null };
      }
    });
    playerLastGames.forEach((playerLastGame) => {
      if (!playerLastGame.lastGame) return;
      const lastGame = playerLastGame.lastGame;
      if (lastGame.gameId === gameId) {
        warns.push(
          `${playerLastGame.player}님이 직전에 ${game.name}를 플레이함`
        );
      }
    });
    const playerLastGameUUIDs = new Set(
      playerLastGames
        .map((playerLastGame) => playerLastGame.uuid)
        .filter((x) => x !== null) as string[]
    );
    if (playerLastGameUUIDs.size === 1) {
      const lastGameUUID = playerLastGameUUIDs.values().next().value;
      const lastGame = games.find((x) => x.uuid === lastGameUUID);
      const lastGamePlayers = new Set(lastGame?.players ?? []);
      const players = new Set(playerLastGames.map((x) => x.player));

      if (lastGamePlayers.size === players.size) {
        const diff = new Set(
          Array.from(players).filter((x) => !lastGamePlayers.has(x))
        );
        if (diff.size === 0) {
          warns.push(
            `이 플레이어 집합은 직전에 동일한 플레이어 집합으로 ${game.name}를 플레이함`
          );
        }
      }
    }
    return warns;
  }, [
    game.name,
    game.players.max,
    game.players.min,
    gameId,
    games,
    ongoingGames,
    players,
  ]);

  const handleAddUser = (handle: string) => {
    if (!inputRef.current) return;
    const user = USERS.find((x) => x.handle === handle);
    if (!user) return;
    setPlayers((prev) => {
      if (prev.find((x) => x === handle)) return prev;
      return [...prev, handle];
    });
    setUserSearchInput("");
    inputRef.current.focus();
  };

  const handleRemoveUser = (handle: string) => {
    setPlayers((prev) => prev.filter((x) => x !== handle));
  };

  const handleAddGameResult = async () => {
    if (adding) return;
    setAdding(true);

    const gameUUID = uuidv4();

    try {
      await set(ref(db, `games/${gameUUID}`), {
        uuid: gameUUID,
        startedAt: Date.now(),
        gameId,
        players,
      } satisfies GameResultStarted);
      snackbar.enqueue({
        message: "게임이 추가되었습니다.",
        severity: "success",
      });
      setPlayers([]);
    } catch (e) {
      if (e instanceof FirebaseError) {
        snackbar.enqueue({
          message: `게임 추가에 실패했습니다: ${e.message}`,
          severity: "error",
        });
      } else {
        snackbar.enqueue({
          message: `게임 추가에 실패했습니다.`,
          severity: "error",
        });
      }
    }

    setAdding(false);
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
      <Typo h2 as="h1">
        진행 중인 게임
      </Typo>
      {ongoingGames.length === 0 ? (
        <>
          <EmptyStatePlaceholder>
            진행 중인 게임이 없습니다.
          </EmptyStatePlaceholder>
        </>
      ) : (
        <>
          <TableContainer>
            <Table
              fullWidth
              style={{
                tableLayout: "fixed",
              }}
              padding="dense"
            >
              <TableHead>
                <Row>
                  <Cell width="20%">게임</Cell>
                  <Cell width="40%">플레이어</Cell>
                  <Cell width="20%">시간</Cell>
                  <Cell width="20%">수정</Cell>
                </Row>
              </TableHead>
              <TableBody>
                {ongoingGames.map((game) => (
                  <Row key={game.uuid}>
                    <Cell>
                      <Typo
                        ellipsis
                        style={{
                          verticalAlign: "middle",
                        }}
                      >
                        <Emoji emoji={gameById(game.gameId).emoji} />{" "}
                        {gameById(game.gameId).name}
                      </Typo>
                    </Cell>
                    <Cell>
                      <Typo
                        ellipsis
                        style={{
                          verticalAlign: "middle",
                        }}
                      >
                        {game.players.join(", ")}
                      </Typo>
                    </Cell>
                    <Cell
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <Typo tabular>
                        <ElapsedTime start={game.startedAt} />
                      </Typo>
                    </Cell>
                    <Cell padding="none">
                      <Link href={`/add/commit?uuid=${game.uuid}`}>
                        <Button fullWidth transparent>
                          <IconEdit />
                        </Button>
                      </Link>
                    </Cell>
                  </Row>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      <Space h={64} />
      <Typo h2 as="h1">
        새 게임 추가
      </Typo>
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
        플레이어
        <Typo
          description
          style={{
            fontWeight: "normal",
          }}
        >
          <IconInfoCircle /> {players.length}명
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
      {players.length === 0 ? (
        <EmptyStatePlaceholder>
          게임을 입력하지 않았습니다.
        </EmptyStatePlaceholder>
      ) : (
        <>
          <Table fullWidth padding="dense">
            <TableHead>
              <Row>
                <Cell>핸들</Cell>
                <Cell>삭제</Cell>
              </Row>
            </TableHead>
            <TableBody>
              {players.map((handle) => (
                <Row key={handle}>
                  <Cell>{handle}</Cell>
                  <Cell padding="none">
                    <Button
                      onClick={() => handleRemoveUser(handle)}
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
            <IconPlus /> 게임 시작 ({game.name}, {players.length}명)
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
