"use client";

import { Item, Itemize } from "@solved-ac/ui-react";

const Page = () => {
  return (
    <>
      <Itemize>
        <Item>
          <a href="https://namu.wiki/w/%EB%B2%9A%EA%BD%83%20%EB%82%B4%EB%A6%AC%EB%8A%94%20%EC%8B%9C%EB%8C%80%EC%97%90%20%EA%B2%B0%ED%88%AC%EB%A5%BC/%EA%B2%8C%EC%9E%84%20%EB%B0%A9%EB%B2%95">
            게임 방법
          </a>
          , 나무위키
        </Item>
        <Item>
          <a href="https://namu.wiki/w/%EB%B2%9A%EA%BD%83%20%EB%82%B4%EB%A6%AC%EB%8A%94%20%EC%8B%9C%EB%8C%80%EC%97%90%20%EA%B2%B0%ED%88%AC%EB%A5%BC/%EB%A3%B0">
            세부 규칙
          </a>
          , 나무위키
        </Item>
      </Itemize>
    </>
  );
};

export default Page;
