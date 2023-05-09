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
  Typo,
} from "@solved-ac/ui-react";

const Page = () => {
  return (
    <>
      <Itemize>
        <Item>
          <a href="https://mahjongsoul.yo-star.com/kr/faq">
            마작 초보자 가이드
          </a>
          , 작혼
        </Item>
        <Item>
          <a href="https://namu.wiki/w/%EB%A6%AC%EC%B9%98%EB%A7%88%EC%9E%91/%EC%A7%84%ED%96%89">
            리치 마작의 진행
          </a>
          , 나무위키
        </Item>
        <Item>
          <a href="https://namu.wiki/w/%EB%A6%AC%EC%B9%98%EB%A7%88%EC%9E%91/%EC%97%AD">
            리치 마작의 역
          </a>
          , 나무위키
        </Item>
        <Item>
          <a href="https://namu.wiki/w/%EB%A6%AC%EC%B9%98%EB%A7%88%EC%9E%91/%EC%A0%90%EC%88%98">
            리치 마작의 점수 계산
          </a>
          , 나무위키
        </Item>
        <Item>
          <a href="https://namu.wiki/w/3%EC%9D%B8%20%EB%A7%88%EC%9E%91#s-1">
            3인 리치 마작
          </a>
          , 나무위키
        </Item>
      </Itemize>
      <Space h={32} />
      규칙은 합의 하에 자유롭게 정해도 무방하나, 미리 합의하지 않았다면 아래
      규칙을 적용하도록 합니다.
      <Space h={16} />
      <Typo h3>기본</Typo>
      <TableContainer>
        <Table
          padding="dense"
          fullWidth
          style={{
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <Row>
              <Cell width="30%">규칙</Cell>
              <Cell width="70%">적용 여부</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>시작 점수</Cell>
              <Cell>
                4인: 25,000점
                <br />
                3인: 35,000점
              </Cell>
            </Row>
            <Row>
              <Cell>반환 점수</Cell>
              <Cell>
                4인: 30,000점을 넘은 사람이 없으면 연장
                <br />
                3인: 40,000점을 넘은 사람이 없으면 연장
              </Cell>
            </Row>
            <Row>
              <Cell>
                들통 <Typo description>ぶっとび</Typo>
              </Cell>
              <Cell>
                인정함 &mdash; 점수가 0점 <u>미만</u>이면 즉시 게임 종료
              </Cell>
            </Row>
            <Row>
              <Cell>
                하코시타 <Typo description>箱下</Typo>
              </Cell>
              <Cell>
                인정함 &mdash; 본인의 점수보다 큰 점수 손해가 있으면 본인의
                점수가 0점 미만이 되더라도 전부 지불
              </Cell>
            </Row>
            <Row>
              <Cell>동점 처리</Cell>
              <Cell>첫 친을 기준으로 반시계방향으로 높은 순위를 부여</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
      <Typo h3>점수와 화료</Typo>
      <TableContainer>
        <Table
          padding="dense"
          fullWidth
          style={{
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <Row>
              <Cell width="30%">규칙</Cell>
              <Cell width="70%">적용 여부</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>
                쿠이탕 <Typo description>喰いタン</Typo>
              </Cell>
              <Cell>인정함 &mdash; 비멘젠 탕야오만으로도 화료 가능</Cell>
            </Row>
            <Row>
              <Cell>
                아토즈케 <Typo description>後付け</Typo>
              </Cell>
              <Cell>허용함 &mdash; 우연에 의한 역만으로도 화료 가능</Cell>
            </Row>
            <Row>
              <Cell>
                쿠이핑후 <Typo description>喰いピンフ</Typo>
              </Cell>
              <Cell>1판 20부는 1판 30부의 점수로 계산함</Cell>
            </Row>
            <Row>
              <Cell>절상만관</Cell>
              <Cell>
                인정하지 않음
                <br />
                4판 30부는 만관이 <u>아님</u>
                <br />
                3판 60부는 만관이 <u>아님</u>
              </Cell>
            </Row>
            <Row>
              <Cell>헤아림 역만</Cell>
              <Cell>
                인정함
                <br />
                13판 이상은 역만임
              </Cell>
            </Row>
            <Row>
              <Cell>역만 복합</Cell>
              <Cell>인정함</Cell>
            </Row>
            <Row>
              <Cell>더블 론</Cell>
              <Cell>인정함</Cell>
            </Row>
            <Row>
              <Cell>트리플 론</Cell>
              <Cell>인정함</Cell>
            </Row>
            <Row>
              <Cell>리치 공탁금</Cell>
              <Cell>
                1,000점 <u>이상</u>이면 리치 가능
              </Cell>
            </Row>
            <Row>
              <Cell>후리텐 리치</Cell>
              <Cell>인정함 &mdash; 후리텐이어도 리치 가능</Cell>
            </Row>
            <Row>
              <Cell>가라텐 리치</Cell>
              <Cell>
                인정함 &mdash; 대기패가 모두 등장한 상태여도 리치 가능
              </Cell>
            </Row>
            <Row>
              <Cell>쯔모 손실</Cell>
              <Cell>인정함</Cell>
            </Row>
            <Row>
              <Cell>책임지불</Cell>
              <Cell>인정함 &mdash; 대삼원, 대사희, 스깡즈</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
      <Typo h3>연장</Typo>
      <TableContainer>
        <Table
          padding="dense"
          fullWidth
          style={{
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <Row>
              <Cell width="30%">규칙</Cell>
              <Cell width="70%">적용 여부</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>동풍전 남입</Cell>
              <Cell>
                반환 점수를 넘기는 사람이 있으면 즉시 종료
                <br />남 4국이 끝나면 즉시 종료
              </Cell>
            </Row>
            <Row>
              <Cell>반장전 서입</Cell>
              <Cell>
                반환 점수를 넘기는 사람이 있으면 즉시 종료
                <br />북 4국이 끝나면 즉시 종료
              </Cell>
            </Row>
            <Row>
              <Cell>잔류공탁금</Cell>
              <Cell>오라스 유국 시 1위가 가져감</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
      <Typo h3>유국</Typo>
      <TableContainer>
        <Table
          padding="dense"
          fullWidth
          style={{
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <Row>
              <Cell width="30%">규칙</Cell>
              <Cell width="70%">적용 여부</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>구종구패</Cell>
              <Cell>유국</Cell>
            </Row>
            <Row>
              <Cell>사풍연타</Cell>
              <Cell>
                4인: 유국
                <br />
                3인: 속행
              </Cell>
            </Row>
            <Row>
              <Cell>사깡</Cell>
              <Cell>유국</Cell>
            </Row>
            <Row>
              <Cell>사가리치</Cell>
              <Cell>
                4인: 유국
                <br />
                3인: 속행
              </Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
      <Typo h3>역</Typo>
      <TableContainer>
        <Table
          padding="dense"
          fullWidth
          style={{
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <Row>
              <Cell width="30%">규칙</Cell>
              <Cell width="70%">적용 여부</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>
                유국만관 <Typo description>流局満貫</Typo>
              </Cell>
              <Cell>인정하지만 화료로 취급하지 않음</Cell>
            </Row>
            <Row>
              <Cell>
                북도라 <Typo description>北ドラ</Typo>
              </Cell>
              <Cell>인정함 &mdash; 꽃패 취급</Cell>
            </Row>
            <Row>
              <Cell>
                인화 <Typo description>人和</Typo>
              </Cell>
              <Cell>인정함 &mdash; 4판역</Cell>
            </Row>
            <Row>
              <Cell>
                녹일색 <Typo description>緑一色</Typo>
              </Cell>
              <Cell>
                인정함 &mdash; 역만
                <br />발<Typo description>發</Typo> 없는 형태도 인정함
              </Cell>
            </Row>
            <Row>
              <Cell>
                스안커 단기 <Typo description>四暗刻単騎</Typo>
              </Cell>
              <Cell>인정함 &mdash; 더블 역만</Cell>
            </Row>
            <Row>
              <Cell>
                대사희 <Typo description>大四喜</Typo>
              </Cell>
              <Cell>인정함 &mdash; 더블 역만</Cell>
            </Row>
            <Row>
              <Cell>
                순정구련보등 <Typo description>純正九蓮宝燈</Typo>
              </Cell>
              <Cell>인정함 &mdash; 더블 역만</Cell>
            </Row>
            <Row>
              <Cell>
                국사무쌍 13면 대기 <Typo description>国士無双十三面待ち</Typo>
              </Cell>
              <Cell>인정함 &mdash; 더블 역만</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Page;
