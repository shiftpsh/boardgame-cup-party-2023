"use client";

import {
    Cell,
    Divider,
    Item,
    Itemize,
    Paragraph,
    Row,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Typo,
} from "@solved-ac/ui-react";

const Page = () => {
  return (
    <>
      <Typo h3>요약</Typo>
      <Itemize>
        <Item>원하는 사람과 보드게임을 플레이해요.</Item>
        <Item>
          게임에 참여하면 게임 결과와 걸린 시간에 따라 점수를 획득할 수 있어요.
        </Item>
        <Item>
          점수를 합산해 순위가 매겨져요. 순위에 따라 상품을 받아가세요.
        </Item>
      </Itemize>
      <Divider />
      <Typo h3>개요</Typo>
      <Paragraph>
        『보드게임컵 파티!』는 보드게임을 좋아하는 사람들이 모여서 보드게임을
        플레이하고 경쟁하는 행사입니다. 자유롭게 돌아다니며 원하는 사람과 정해진
        목록의 보드게임들을 플레이하면 됩니다!
      </Paragraph>
      <Paragraph>
        게임은 12시 30분부터 6시까지 진행합니다. 6시까지 끝나지 않은 게임은 즉시
        종료하며, 게임 상태에 따라 혹은 기타 참가자들이 합의할 수 있는 방법으로
        승패를 정합니다.
      </Paragraph>
      <Typo h3>매칭</Typo>
      <Paragraph>
        기본적으로 하고 싶은 사람들과 함께 게임을 즐기면 됩니다. 하고 싶은 게임에
        자리가 없다면, 나눠 드린 대기 카드를 놓아 대기할 수 있습니다.
      </Paragraph>
      <Paragraph>
        단, 다음 추가 규칙이 적용됩니다.
      </Paragraph>
      <Itemize>
        <Item>
          직전에 플레이한 사람들의 집합과 같은 집합으로 새 게임을 시작할 수는
          없습니다.
        </Item>
        <Item>직전에 플레이한 게임을 한 번 더 플레이할 수는 없습니다.</Item>
      </Itemize>
      <Paragraph>
        매칭에 어려움이 있다면 스탭에게 도움을 요청할 수 있습니다.
      </Paragraph>
      <Typo h3>점수: 보드게임컵</Typo>
      <Paragraph>
        『보드게임컵』 참가 성적에 따라, <b>(해결한 문제) &times; 50점</b>의
        기본 점수를 가지고 시작합니다.
      </Paragraph>
      <Typo h3>점수: 보드게임 플레이</Typo>
      <Paragraph>
        보드게임을 플레이하면 순위와 걸린 시간에 따라 점수를 받을 수 있습니다.
      </Paragraph>
      <Paragraph>
        <em>N</em>명이 <em>T</em>분 동안 플레이한 게임의 경우 참가자들은 총{" "}
        <b>
          10 &times; <em>N</em> &times; <em>T</em>점
        </b>
        을 나눠 갖습니다. 게임 결과에 따라 다음의 비율로 점수를 나눠 가지되, 1의
        자리에서 올림하여 계산합니다.
      </Paragraph>
      <TableContainer>
        <Table
          fullWidth
          style={{
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
          padding="dense"
        >
          <TableHead>
            <Row>
              <Cell>인원</Cell>
              {new Array(10).fill(undefined).map((_, i) => (
                <Cell key={i}>{i + 1}위</Cell>
              ))}
            </Row>
          </TableHead>
          <TableBody>
            {new Array(9).fill(undefined).map((_, i) => (
              <Row key={i}>
                <Cell>
                  <b>{i + 2}명</b>
                </Cell>
                {new Array(10).fill(undefined).map((_, j) => (
                  <Cell key={j}>
                    <Typo tabular>{j < i + 2 ? i * 2 + 4 - j : ""}</Typo>
                  </Cell>
                ))}
              </Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paragraph>
        게임에서 동점이 발생한 경우, 참가자들이 합의할 수 있는 방법으로 순위를
        정합니다. 게임마다의 추가 규칙으로 해결할 수도 있고, 가위바위보로 해결할
        수도 있습니다.
      </Paragraph>
      <Paragraph>
        게임에 스탭이 참가한 경우, 스탭을 포함해 점수를 계산하되, 스탭이 실제로
        획득하는 점수는 0점으로 설정합니다.
      </Paragraph>
    </>
  );
};

export default Page;
