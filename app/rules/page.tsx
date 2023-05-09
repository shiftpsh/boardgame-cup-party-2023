"use client";

import GAMES from "@/app/games.json";
import Emoji from "@/component/Emoji";
import {
  Container,
  Item,
  Itemize,
  Paragraph,
  Space,
  Typo,
} from "@solved-ac/ui-react";
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
      <Space h={32} />
      <Paragraph>
        <Typo description>
          위의 문서들에서 소개되는 규칙들은 기본 규칙들입니다. 기본 규칙에서
          벗어난 로컬 규칙들의 채택 여부는 참가자들 간의 합의로 결정하면 됩니다.
        </Typo>
      </Paragraph>
      <Paragraph>
        <Typo description>
          규칙의 해석으로 인한 분쟁이 발생할 경우, 가위바위보 등으로 해결하는
          것이 좋습니다. 분쟁 해결에 실패하면 스태프의 판단 하에 게임을 즉시
          중단하고 해당 게임의 점수를 0으로 설정할 수 있습니다.
        </Typo>
      </Paragraph>
      <Space h={64} />
    </Container>
  );
};

export default Page;
