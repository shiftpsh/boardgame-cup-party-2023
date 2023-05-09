"use client";

import {
  Divider,
  Enumerate,
  Item,
  Itemize,
  Paragraph,
  Typo,
} from "@solved-ac/ui-react";

const Page = () => {
  return (
    <>
      <Typo h3>요약</Typo>
      <Itemize>
        <Item>
          14장의 패로 머리가 하나, 몸통이 네 개인 용을 완성하는 게임이에요.
        </Item>
        <Item>
          평소에는 13장의 패를 들고 있다가, 자신의 차례가 오면 한 장의 패를
          가져오고, 필요없는 패를 버려요.
        </Item>
        <Item>
          머리는 같은 2장의 패로 만들고, 몸통은 같은 3&ndash;4장의 패 혹은
          연속된 3장의 패로 만들어요.
        </Item>
        <Item>가장 먼저 족보를 만족하는 용을 완성한 사람이 승리해요.</Item>
      </Itemize>
      <Divider />
      <Typo h2>진행 개요</Typo>
      <Typo h3>게임 전체의 흐름</Typo>
      <Paragraph>
        게임은 일반적으로 네 번, 혹은 여덟 번의 대국으로 이루어져 있으며,
        일반적으로 누군가가 <b>화료</b>
        <Typo description>和了</Typo>, 즉, 용을 완성하면 다음 대국으로 넘어가게
        됩니다.
      </Paragraph>
      <Paragraph>각 대국은 다음과 같은 순서로 진행됩니다.</Paragraph>
      <Enumerate>
        <Item>
          동 1국 <Typo description>東一局</Typo>을 시작으로, 동 2국, 동 3국 (4인
          마작의 경우 동 4국까지)
        </Item>
        <Item>
          남 1국 <Typo description>南一局</Typo>을 시작으로, 남 2국, 남 3국 (4인
          마작의 경우 남 4국까지)
        </Item>
      </Enumerate>
      <Paragraph>
        각 사람은 자리에 따라 동, 남, 서, 북의 방향을 가집니다. 처음 시작하는
        사람이 <b>동가</b>
        <Typo description>東家</Typo>이고, 자리의 반시계방향 순서대로{" "}
        <b>남가</b>, <b>서가</b>, <b>북가</b>입니다. 동가는 게임의 규칙에서
        특별한 권리를 갖고 있어서, <b>친</b>
        <Typo description>親</Typo> 또는 <b>오야</b>라고도 합니다.
      </Paragraph>
      <Paragraph>
        대국이 끝날 때마다 자리의 방향이 바뀝니다. 한 국이 끝날 때 직전에{" "}
        <b>남가</b> 였던 사람은 다음 국에서는 <b>친</b>이 되고, 다른 사람들의
        방향도 같은 방법으로 바뀝니다. 따라서 동 4국 동안 모든 사람이 한 번씩
        동쪽이 됩니다.
      </Paragraph>
      <Paragraph>
        각 대국마다 결과에 따라 점수를 교환합니다. 보통 <b>4인 동풍전</b>
        <Typo description>東風戰</Typo>의 경우 동 4국이, <b>4인 반장전</b>
        <Typo description>半荘戰</Typo>의 경우 남 4국이 끝났을 때 갖고 있는
        점수로 최종 순위를 결정합니다.
      </Paragraph>
      <Typo h3>대국의 흐름</Typo>
      <Paragraph>각각 13장의 패를 들고 시작합니다.</Paragraph>
      <Paragraph>
        친 &rarr; 남가 &rarr; 서가 &rarr; 북가 순서대로 순환하면서, 각자 중앙의{" "}
        <b>패산</b>
        <Typo description>牌山</Typo>에서 한 장의 패를 가져오고, 자신에게 필요
        없는 패를 자기 앞에 놓습니다.
      </Paragraph>
      <Paragraph>
        14개의 패로 용을 만들어야 하지만 보통은 손패에 13장밖에 없습니다. 1장만
        더 있으면 화료할 수 있는 상태를 <b>텐파이</b>
        <Typo description>聽牌</Typo> 상태라고 합니다. 텐파이 상태에서는 보통
        다음 두 가지 방법으로 화료할 수 있습니다.
      </Paragraph>
      <Itemize>
        <Item>
          내 차례가 되었을 때 패산에서 가져온 패가 용을 완성할 수 있는 마지막 한
          장의 패라면 <b>쯔모</b>를 외치고 화료
        </Item>
        <Item>
          다른 사람이 방금 버린 패가 내 용을 완성할 수 있는 마지막 한 장의
          패라면 <b>론</b>을 외치고 화료
        </Item>
      </Itemize>
      <Paragraph>
        대국은 보통 누군가가 화료하면 즉시 종료되고 다음 국으로 넘어가게 됩니다.
        아무도 화료하지 못할 경우에도 그렇습니다. 단, 아래의 경우에는 다음
        국으로 넘어가지 않고 <b>연장</b>
        <Typo description>延長</Typo>
        하게 됩니다.
      </Paragraph>
      <Itemize>
        <Item>친의 화료.</Item>
        <Item>
          패산에 있는 모든 패를 소진해도 아무도 화료하지 못한 상황에서, 친의
          텐파이.
        </Item>
        <Item>기타 드물게 등장하는 몇몇 특수한 경우.</Item>
      </Itemize>
      <Paragraph>대국이 종료되면 대국 결과에 따라 점수를 교환합니다.</Paragraph>
    </>
  );
};

export default Page;
