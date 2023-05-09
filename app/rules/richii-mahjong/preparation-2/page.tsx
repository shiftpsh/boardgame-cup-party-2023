"use client";

import { Paragraph, Typo } from "@solved-ac/ui-react";
import RulesImage from "../../RulesImage";

const Page = () => {
  return (
    <>
      <Typo h2>대국 준비하기</Typo>
      <Typo h3>패산 쌓기</Typo>
      <Paragraph>
        대국을 시작하기 전, 패를 잘 섞고 <b>패산</b>
        <Typo description>牌山</Typo>을 쌓습니다.
      </Paragraph>
      <Paragraph>
        패산은 각자의 앞에 17열의 패가 2층으로 놓여 있는 형태입니다. 위에서 봤을
        때 정사각형 모양이 됩니다.
      </Paragraph>
      <RulesImage src="/richii-mahjong/mahjong-1.svg" />
      <Paragraph>앞에서 봤을 때는 이런 형태가 됩니다.</Paragraph>
      <RulesImage src="/richii-mahjong/mahjong-2.svg" />
      <Typo h3>주사위 굴리기</Typo>
      <Paragraph>
        패산을 쌓으면 동그란 형태가 됩니다. 이제 동그란 패산에서 패를 가져가기
        시작할 위치를 결정해야 합니다.
      </Paragraph>
      <Paragraph>
        <b>친</b>은 주사위를 두 개 굴려서, 어느 쪽의 패산의 어디부터 패를
        가져갈지 결정합니다. 자리를 결정할 때처럼, 친이 1번이 되어
        반시계반향으로 번호를 매깁니다. 주사위의 눈의 합의 번호와 일치하는 쪽의
        패산을 선택합니다.
      </Paragraph>
      <Paragraph>
        선택된 패산에서, 오른쪽으로부터 방금 던진 주사위의 눈의 합만큼 패 뭉치를
        집어서 분리해 놓습니다. 예를 들어 친이 굴린 주사위의 결과가 6이었다면
        패산은 이런 상태가 됩니다.
      </Paragraph>
      <RulesImage src="/richii-mahjong/mahjong-3.svg" />
    </>
  );
};

export default Page;
