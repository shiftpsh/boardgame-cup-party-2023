"use client";

import { GameResultFinished, GameResultRank } from "@/types/GameResult";
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
  Typo,
} from "@solved-ac/ui-react";
import { useEffect, useMemo, useState } from "react";

import { PageProps } from "@/.next/types/app/page";
import USERS from "@/app/users.json";
import AnimatedNumber from "@/component/AnimatedNumber";
import Emoji from "@/component/Emoji";
import { useAuth } from "@/context/AuthContext";
import { useGames } from "@/context/GamesContext";
import { useSnackbar } from "@/context/SnackbarContext";
import useElapsedTime from "@/hooks/useElapsedTime";
import { db } from "@/utils/database";
import { gameById } from "@/utils/game";
import { score } from "@/utils/score";
import styled from "@emotion/styled";
import { IconInfoCircle, IconPlus, IconTrash } from "@tabler/icons-react";
import { FirebaseError } from "firebase/app";
import { ref, set } from "firebase/database";
import { useSearchParams } from "next/navigation";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";

const DndTableBody = styled(TableBody)`
  display: block;
`;

const DndRow = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
`;

const Page = (props: PageProps) => {
  const auth = useAuth();
  const snackbar = useSnackbar();
  const { games } = useGames();

  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid") || "";

  const [result, setResult] = useState<GameResultRank[]>([]);
  const [adding, setAdding] = useState<boolean>(false);

  const record = useMemo(() => {
    return games.find((x) => x.uuid === uuid);
  }, [games, uuid]);

  const game = gameById(record?.gameId || "custom");
  const elapsed = useElapsedTime(record?.startedAt || Date.now());
  const realElapsed =
    record && "finishedAt" in record
      ? record.finishedAt - record.startedAt
      : elapsed;
  const elapsedMinutes = Math.floor(realElapsed / 1000 / 60);
  const elapsedSeconds = Math.floor(realElapsed / 1000) % 60;

  const handleRemoveUser = (handle: string) => {
    setResult((prev) =>
      prev
        .filter((x) => x.handle !== handle)
        .map((x, i) => ({ ...x, rank: i + 1 }))
    );
  };

  const handleDragUser: OnDragEndResponder = ({ destination, source }) => {
    if (!destination) return;
    if (destination.index === source.index) return;
    setResult((prev) => {
      const result = [...prev];
      const [removed] = result.splice(source.index, 1);
      result.splice(destination.index, 0, removed);
      return result.map((x, i) => ({ ...x, rank: i + 1 }));
    });
  };

  const handleAddGameResult = async () => {
    if (adding || !record) return;
    setAdding(true);

    const now = Date.now();

    try {
      await set(ref(db, `games/${record.uuid}`), {
        ...record,
        finishedAt: now,
        durationMinutes: elapsedMinutes,
        result,
      } satisfies GameResultFinished);
      snackbar.enqueue({
        message: "게임 결과가 추가되었습니다.",
        severity: "success",
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        snackbar.enqueue({
          message: `게임 결과 추가에 실패했습니다: ${e.message}`,
          severity: "error",
        });
      } else {
        snackbar.enqueue({
          message: `게임 결과 추가에 실패했습니다.`,
          severity: "error",
        });
      }
    }

    setAdding(false);
  };

  useEffect(() => {
    if (!record) {
      setResult([]);
      return;
    }
    if ("result" in record) {
      setResult(record.result);
    } else {
      const players = record?.players || [];
      setResult(
        players
          .map((x) => USERS.find((u) => u.handle === x))
          .filter((x) => typeof x !== "undefined")
          .map((x, i) => ({
            handle: x!.handle,
            rank: i + 1,
            exclude: x!.type === "staff",
          }))
      );
    }
  }, [record, record?.players]);

  if (!auth.isAdmin) {
    return (
      <Container>
        <EmptyStatePlaceholder>관리자가 아닙니다.</EmptyStatePlaceholder>
      </Container>
    );
  }

  if (!record) {
    return (
      <Container>
        <EmptyStatePlaceholder>게임을 찾을 수 없습니다.</EmptyStatePlaceholder>
      </Container>
    );
  }

  return (
    <Container>
      <Space h={64} />
      <Typo h4 as="h2">
        게임
      </Typo>
      <span>
        <Emoji emoji={game.emoji} /> {game.name}
      </span>
      <Space h={16} />
      <Typo h4 as="h2">
        플레이 시간
      </Typo>
      {elapsedMinutes}분 {elapsedSeconds}초
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
      <Space h={16} />
      {result.length === 0 ? (
        <EmptyStatePlaceholder>
          게임 결과를 입력하지 않았습니다.
        </EmptyStatePlaceholder>
      ) : (
        <>
          <Table fullWidth padding="dense">
            <TableHead>
              <DndRow>
                <Cell>순위</Cell>
                <Cell>핸들</Cell>
                <Cell>점수</Cell>
                <Cell>삭제</Cell>
              </DndRow>
            </TableHead>
            <DragDropContext onDragEnd={handleDragUser}>
              <Droppable droppableId="list">
                {(provided, snapshot) => (
                  <DndTableBody
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {result.map((user) => (
                      <Draggable
                        draggableId={user.handle}
                        key={user.handle}
                        index={user.rank - 1}
                      >
                        {(provided, snapshot) => (
                          <DndRow
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              ...provided.draggableProps.style,
                            }}
                          >
                            <Cell
                              style={{
                                textAlign: "center",
                              }}
                            >
                              <Typo
                                tabular
                                style={{
                                  verticalAlign: "middle",
                                }}
                              >
                                {user.rank}위
                              </Typo>
                            </Cell>
                            <Cell>
                              <Typo
                                ellipsis
                                description={user.exclude}
                                style={{
                                  verticalAlign: "middle",
                                }}
                              >
                                {user.handle}
                              </Typo>
                            </Cell>
                            <Cell
                              style={{
                                textAlign: "right",
                              }}
                            >
                              <Typo
                                tabular
                                style={{
                                  verticalAlign: "middle",
                                }}
                              >
                                <AnimatedNumber
                                  value={
                                    user.exclude
                                      ? 0
                                      : score(
                                          result.length,
                                          elapsedMinutes,
                                          user.rank
                                        )
                                  }
                                />
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
                          </DndRow>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </DndTableBody>
                )}
              </Droppable>
            </DragDropContext>
          </Table>
          <Space h={32} />
          <Button fullWidth disabled={adding} onClick={handleAddGameResult}>
            <IconPlus /> 기록 ({game.name}, {elapsedMinutes}분, {result.length}
            명)
          </Button>
        </>
      )}
      <Space h={64} />
    </Container>
  );
};

export default Page;
