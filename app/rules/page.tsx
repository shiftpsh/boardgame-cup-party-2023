"use client";

import GAMES from "@/app/games.json";
import Emoji from "@/component/Emoji";
import { Container, Item, Itemize, Space, Typo } from "@solved-ac/ui-react";
import Link from "next/link";

const entries = [
  {
    emoji: "🎉",
    title: "보드게임컵 파티!",
    id: "general",
  },
  ...GAMES.filter((x) => x.id !== "custom").map((game) => ({
    emoji: game.emoji,
    title: game.name,
    id: game.id,
  })),
];

const Page = () => {
  return (
    <Container>
      <Space h={32} />
      <Typo h2>규칙</Typo>
      <Space h={32} />
      <Itemize>
        {entries.map((entry) => (
          <Item key={entry.id}>
            <Link href={`/rules/${entry.id}`}>
              <Emoji emoji={entry.emoji} />
            </Link>{" "}
            <Link href={`/rules/${entry.id}`}>{entry.title}</Link>
          </Item>
        ))}
      </Itemize>
      <Space h={64} />
    </Container>
  );
};

export default Page;
