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
import Dice, { Dices } from "./Dice";

const Page = () => {
  return (
    <>
      <Itemize>
        <Item>
          <a href="https://namu.wiki/w/%EC%9A%94%ED%8A%B8(%EA%B2%8C%EC%9E%84)#s-2">
            게임 방법
          </a>
          , 나무위키
        </Item>
      </Itemize>
      <Space h={32} />
      보드게임 카페에 비치된 요트 다이스는 코리아보드게임즈 룰을 사용합니다.
      족보는 닌텐도 스위치 51 Worldwide Games와 같으며, 아래와 같습니다.
      <Space h={16} />
      <TableContainer>
        <Table
          padding="dense"
          fullWidth
          style={{
            whiteSpace: "nowrap",
          }}
        >
          <TableHead>
            <Row>
              <Cell>족보</Cell>
              <Cell colSpan={2}>예시</Cell>
              <Cell>점수</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>
                <b>에이스</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={1} />
                  <Dice value={1} />
                  <Dice value={1} />
                  <Dice value={4} hide />
                  <Dice value={5} hide />
                </Dices>
              </Cell>
              <Cell>= 3점</Cell>
              <Cell>1이 나온 주사위의 개수 &times; 1</Cell>
            </Row>
            <Row>
              <Cell>
                <b>듀얼</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={2} />
                  <Dice value={2} />
                  <Dice value={2} />
                  <Dice value={3} hide />
                  <Dice value={6} hide />
                </Dices>
              </Cell>
              <Cell>= 6점</Cell>
              <Cell>2이 나온 주사위의 개수 &times; 2</Cell>
            </Row>
            <Row>
              <Cell>
                <b>트리플</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={1} hide />
                  <Dice value={3} />
                  <Dice value={3} />
                  <Dice value={3} />
                  <Dice value={4} hide />
                </Dices>
              </Cell>
              <Cell>= 9점</Cell>
              <Cell>3이 나온 주사위의 개수 &times; 3</Cell>
            </Row>
            <Row>
              <Cell>
                <b>쿼드</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={1} hide />
                  <Dice value={2} hide />
                  <Dice value={4} />
                  <Dice value={4} />
                  <Dice value={6} hide />
                </Dices>
              </Cell>
              <Cell>= 8점</Cell>
              <Cell>4가 나온 주사위의 개수 &times; 4</Cell>
            </Row>
            <Row>
              <Cell>
                <b>펜타</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={3} hide />
                  <Dice value={5} />
                  <Dice value={5} />
                  <Dice value={5} />
                  <Dice value={5} />
                </Dices>
              </Cell>
              <Cell>= 20점</Cell>
              <Cell>5가 나온 주사위의 개수 &times; 5</Cell>
            </Row>
            <Row>
              <Cell>
                <b>헥사</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={1} hide />
                  <Dice value={4} hide />
                  <Dice value={6} />
                  <Dice value={6} />
                  <Dice value={6} />
                </Dices>
              </Cell>
              <Cell>= 18점</Cell>
              <Cell>6이 나온 주사위의 개수 &times; 6</Cell>
            </Row>
            <Row>
              <Cell>
                <b>보너스 점수</b>
              </Cell>
              <Cell></Cell>
              <Cell>= 35점</Cell>
              <Cell>상단 점수의 합이 63점 이상이라면, 35점</Cell>
            </Row>
            <Row>
              <Cell>
                <b>초이스</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={1} />
                  <Dice value={2} />
                  <Dice value={4} />
                  <Dice value={6} />
                  <Dice value={6} />
                </Dices>
              </Cell>
              <Cell>= 19점</Cell>
              <Cell>모든 주사위 눈의 합</Cell>
            </Row>
            <Row>
              <Cell>
                <b>포커</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={4} hide />
                  <Dice value={6} />
                  <Dice value={6} />
                  <Dice value={6} />
                  <Dice value={6} />
                </Dices>
              </Cell>
              <Cell>= 28점</Cell>
              <Cell>
                <u>적어도 4개</u>의 눈이 같다면, <u>모든</u> 주사위 눈의 합
              </Cell>
            </Row>
            <Row>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                <b>풀 하우스</b>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                <Dices>
                  <Dice value={3} />
                  <Dice value={3} />
                  <Dice value={5} />
                  <Dice value={5} />
                  <Dice value={5} />
                </Dices>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                = 21점
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                3개의 눈이 같고, 다른 2개의 눈이 같다면, 모든 주사위 눈의 합
                <br />
                <u>5개가 모두 같은 경우 인정</u>
              </Cell>
            </Row>
            <Row>
              <Cell>
                <b>스몰 스트레이트</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={1} />
                  <Dice value={2} />
                  <Dice value={3} />
                  <Dice value={4} />
                  <Dice value={6} hide />
                </Dices>
              </Cell>
              <Cell>= 15점</Cell>
              <Cell>
                <u>연속한 4개 이상</u>의 눈이 존재한다면, 15점
              </Cell>
            </Row>
            <Row>
              <Cell>
                <b>빅 스트레이트</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={1} />
                  <Dice value={2} />
                  <Dice value={3} />
                  <Dice value={4} />
                  <Dice value={5} />
                </Dices>
              </Cell>
              <Cell>= 30점</Cell>
              <Cell>
                <u>연속한 5개</u>의 눈이 존재한다면, 30점
              </Cell>
            </Row>
            <Row>
              <Cell>
                <b>요트</b>
              </Cell>
              <Cell>
                <Dices>
                  <Dice value={5} />
                  <Dice value={5} />
                  <Dice value={5} />
                  <Dice value={5} />
                  <Dice value={5} />
                </Dices>
              </Cell>
              <Cell>= 50점</Cell>
              <Cell>모든 눈이 같다면, 50점</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Page;
