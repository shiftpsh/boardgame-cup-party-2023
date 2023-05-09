"use client";

import {
  Cell,
  Item,
  Itemize,
  Row,
  Space,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@solved-ac/ui-react";

const Page = () => {
  return (
    <>
      <Itemize>
        <Item>
          <a href="https://namu.wiki/w/%EC%9A%B0%EB%85%B8(%EB%B3%B4%EB%93%9C%20%EA%B2%8C%EC%9E%84)#s-3">
            규칙
          </a>
          , 나무위키
        </Item>
      </Itemize>
      <Space h={32} />
      규칙은 합의 하에 자유롭게 정해도 무방하나, 미리 합의하지 않았다면 아래
      규칙을 적용하도록 합니다.
      <Space h={16} />
      <TableContainer>
        <Table padding="dense" fullWidth>
          <TableHead>
            <Row>
              <Cell>규칙</Cell>
              <Cell>적용 여부</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell rowSpan={3}>공격 카드 넘기기</Cell>
              <Cell>+2 카드는 +2 카드 혹은 +4 카드로 넘길 수 있음</Cell>
            </Row>
            <Row>
              <Cell>+4 카드는 +4 카드로<u>만</u> 넘길 수 있음</Cell>
            </Row>
            <Row>
              <Cell>장수는 누적됨</Cell>
            </Row>
            <Row>
              <Cell>카드 바로 내기</Cell>
              <Cell>뽑아 온 카드가 낼 수 있는 카드라면, 내도 괜찮음</Cell>
            </Row>
            <Row>
              <Cell>끼어들기</Cell>
              <Cell>인정하지 않음</Cell>
            </Row>
            <Row>
              <Cell>0 카드 특수 룰</Cell>
              <Cell>인정하지 않음</Cell>
            </Row>
            <Row>
              <Cell>7 카드 특수 룰</Cell>
              <Cell>인정하지 않음</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Page;
