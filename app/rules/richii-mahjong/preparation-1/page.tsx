"use client";

import {
  Cell,
  Divider,
  Enumerate,
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
import MahjongTile, { MahjongTileType, MahjongTiles } from "../MahjongTile";

const Page = () => {
  return (
    <>
      <Typo h2>패 준비하기</Typo>
      <Typo h3>4인 마작에서의 패</Typo>
      <Paragraph>
        리치 마작은 34종류의 패를 4장씩, 총 136장을 사용합니다. 사용하는 패는
        아래와 같습니다.
      </Paragraph>
      <TableContainer>
        <Table
          fullWidth
          style={{
            tableLayout: "fixed",
          }}
        >
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "55%" }} />
          </colgroup>
          <TableHead>
            <Row>
              <Cell colSpan={2}>패의 종류</Cell>
              <Cell>패의 모양</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell
                rowSpan={2}
                style={{
                  verticalAlign: "middle",
                }}
              >
                자패 <Typo description>字牌</Typo>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                삼원패 <Typo description>三元牌</Typo>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                <MahjongTiles>
                  <MahjongTile tile="Haku" />
                  <MahjongTile tile="Hatsu" />
                  <MahjongTile tile="Chun" />
                </MahjongTiles>
              </Cell>
            </Row>
            <Row>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                풍패 <Typo description>風牌</Typo>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                <MahjongTiles>
                  <MahjongTile tile="Ton" />
                  <MahjongTile tile="Nan" />
                  <MahjongTile tile="Shaa" />
                  <MahjongTile tile="Pei" />
                </MahjongTiles>
              </Cell>
            </Row>
            <Row>
              <Cell
                rowSpan={3}
                style={{
                  verticalAlign: "middle",
                }}
              >
                수패 <Typo description>數牌</Typo>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                만수패 <Typo description>萬子牌</Typo>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                <MahjongTiles>
                  {new Array(9).fill(undefined).map((_, i) => (
                    <MahjongTile
                      key={i}
                      tile={`Man${i + 1}` as MahjongTileType}
                    />
                  ))}
                </MahjongTiles>
              </Cell>
            </Row>
            <Row>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                통수패 <Typo description>筒子牌</Typo>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                <MahjongTiles>
                  {new Array(9).fill(undefined).map((_, i) => (
                    <MahjongTile
                      key={i}
                      tile={`Pin${i + 1}` as MahjongTileType}
                    />
                  ))}
                </MahjongTiles>
              </Cell>
            </Row>
            <Row>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                삭수패 <Typo description>索子牌</Typo>
              </Cell>
              <Cell
                style={{
                  verticalAlign: "middle",
                }}
              >
                <MahjongTiles>
                  {new Array(9).fill(undefined).map((_, i) => (
                    <MahjongTile
                      key={i}
                      tile={`Sou${i + 1}` as MahjongTileType}
                    />
                  ))}
                </MahjongTiles>
              </Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
      <Itemize>
        <Item>꽃이 그려져 있는 패는 게임에서 제외합니다.</Item>
        <Item>
          수패 중 <MahjongTile tile="Man5" /> 5만, <MahjongTile tile="Pin5" />{" "}
          5통, <MahjongTile tile="Sou5" /> 5삭은 각각 한 장씩만을{" "}
          <MahjongTile tile="Man5-Dora" /> 적5만,{" "}
          <MahjongTile tile="Pin5-Dora" /> 적5통,{" "}
          <MahjongTile tile="Sou5-Dora" /> 적5삭으로 교체합니다.
        </Item>
      </Itemize>
      <Typo h3>3인 마작에서의 패</Typo>
      <Paragraph>
        3인 마작은 위의 패에서 추가로{" "}
        <MahjongTiles>
          {new Array(7).fill(undefined).map((_, i) => (
            <MahjongTile key={i} tile={`Man${i + 2}` as MahjongTileType} />
          ))}
        </MahjongTiles>{" "}
        2-8만 및 <MahjongTile tile="Man5-Dora" /> 적5만을 제외한 27종류의 패를
        4장씩, 총 108장을 사용합니다.
      </Paragraph>
      <Divider />
      <Typo h2>점수 나누기</Typo>
      <Paragraph>
        4인 마작은 각각 25,000점, 3인 마작은 각각 35,000점을 시작 점수로
        가집니다. 4인 마작의 경우, 점수를 나타내는 점봉
        <Typo description>點棒</Typo>을 아래와 같이 나눠 가집니다.
      </Paragraph>
      <TableContainer>
        <Table fullWidth padding="dense" style={{ textAlign: "center" }}>
          <TableHead>
            <Row>
              <Cell>100점</Cell>
              <Cell>1,000점</Cell>
              <Cell>5,000점</Cell>
              <Cell>10,000점</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>10개</Cell>
              <Cell>4개</Cell>
              <Cell>2개</Cell>
              <Cell>1개</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
      <Paragraph>점봉에는 보통 아래와 같은 무늬가 새겨져 있습니다.</Paragraph>
      <TableContainer>
        <Table fullWidth padding="dense">
          <TableHead>
            <Row>
              <Cell>점수</Cell>
              <Cell>점봉 모양</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>100점</Cell>
              <Cell
                style={{
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                ::::
              </Cell>
            </Row>
            <Row>
              <Cell>1,000점</Cell>
              <Cell
                style={{
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                <span
                  style={{
                    color: "red",
                  }}
                >
                  •
                </span>
              </Cell>
            </Row>
            <Row>
              <Cell>5,000점</Cell>
              <Cell
                style={{
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                <span
                  style={{
                    color: "red",
                  }}
                >
                  :•:
                </span>
              </Cell>
            </Row>
            <Row>
              <Cell>10,000점</Cell>
              <Cell
                style={{
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                • ·
                <span
                  style={{
                    color: "red",
                  }}
                >
                  :•:
                </span>
                · •
              </Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <Typo h2>순서 정하기</Typo>
      <Enumerate>
        <Item>
          분류해 둔 패에서 4인 마작의 경우{" "}
          <MahjongTiles>
            <MahjongTile tile="Ton" />
            <MahjongTile tile="Nan" />
            <MahjongTile tile="Shaa" />
            <MahjongTile tile="Pei" />
          </MahjongTiles>{" "}
          동남서북, 3인 마작의 경우{" "}
          <MahjongTiles>
            <MahjongTile tile="Ton" />
            <MahjongTile tile="Nan" />
            <MahjongTile tile="Shaa" />
          </MahjongTiles>{" "}
          동남서 패를 섞어 뒤집어 놓고, 각자 한 장씩을 뽑습니다.
        </Item>
        <Item>
          <MahjongTile tile="Ton" />
          동을 뽑은 사람은 그대로 앉아 있고, 동 &rarr; 남 &rarr; 서 &rarr; 북
          순서대로 <u>반시계방향</u>으로 앉습니다.
        </Item>
        <Item>
          동을 뽑은 사람은 주사위 두 개를 굴립니다. 주사위를 굴린 사람을 1번으로
          하고, 반시계방향으로 번호를 붙여 가면서, 주사위의 눈의 합과{" "}
          <u>같은 번호</u>를 갖는 사람을 찾습니다.
        </Item>
        <Item>
          방금 찾은 사람은 같은 방법으로 주사위를 굴려서 다음 사람을 찾습니다.
          이렇게 찾은 사람이 첫 번째 순서로 게임을 시작하게 됩니다.
        </Item>
      </Enumerate>
      <Paragraph>
        순서 정하기를 완료하면 게임이 본격적으로 시작됩니다. 맨 처음에 첫 번째
        순서로 게임을 시작하는 사람이 <b>친</b>이 되며, 반시계방향으로 각각{" "}
        <b>남가</b>, <b>서가</b>, <b>북가</b>가 됩니다.
      </Paragraph>
    </>
  );
};

export default Page;
