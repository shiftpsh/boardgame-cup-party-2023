"use client";

import { Item, Itemize, Space } from "@solved-ac/ui-react";

const Page = () => {
  return (
    <>
      <Itemize>
        <Item>
          <a href="https://namu.wiki/w/%EB%85%B8%20%EB%A8%B8%EC%8B%9C#s-4">
            진행 방법
          </a>
          , 나무위키
        </Item>
      </Itemize>
      <Space h={32} />
      칩의 개수는 모든 플레이어가 같은 수를 갖도록 분배합니다.
    </>
  );
};

export default Page;
