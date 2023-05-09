"use client";

import { Item, Itemize, Space } from "@solved-ac/ui-react";

const Page = () => {
  return (
    <>
      <Itemize>
        <Item>
          <a href="https://ko.wikihow.com/%EC%A0%A0%EA%B0%80-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95">
            젠가 하는 방법
          </a>
          , wikiHow
        </Item>
      </Itemize>
      <Space h={32} />
      <b>위의 링크에서 [블록에 글씨 쓰기] 단계는 무시해 주세요!</b> 준비된
      젠가는 보드게임 카페의 자산입니다.
    </>
  );
};

export default Page;
