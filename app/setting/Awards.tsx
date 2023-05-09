import useAwards from "@/hooks/useAwards";
import {
  Button,
  Cell,
  Collapse,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typo,
} from "@solved-ac/ui-react";
import { useState } from "react";

const Awards = () => {
  const awards = useAwards();

  const [winnersOpen, setWinnersOpen] = useState(false);

  const ranks = new Map(awards.rankers.map((x) => [x.handle, x.rank] as const));

  return (
    <>
      <Button onClick={() => setWinnersOpen((x) => !x)}>보기</Button>
      <Collapse shown={winnersOpen}>
        <TableContainer>
          <Table fullWidth padding="dense">
            <TableHead>
              <Row>
                <Cell width="30%">상격</Cell>
                <Cell width="60%">참가자</Cell>
              </Row>
            </TableHead>
            <TableBody>
              <Row>
                <Cell>
                  <b>전체 1&ndash;3위</b>
                </Cell>
                <Cell>
                  {awards.rankers.slice(0, 10).map((x) => (
                    <div key={x.handle}>
                      {x.handle} ({x.score}, {x.rank}위)
                    </div>
                  ))}
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <b>가장 많은 1위</b>
                  <br />
                  최대 3명
                </Cell>
                <Cell>
                  {awards.most1st.slice(0, 10).map((x) => (
                    <div key={x.handle}>
                      <Typo description={(ranks.get(x.handle) || 0) <= 3}>
                        {x.handle} ({x.count}회, 전체 {ranks.get(x.handle) || 0}
                        위)
                      </Typo>
                    </div>
                  ))}
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <b>가장 많은 마지막 순위</b>
                  <br />
                  최대 3명
                </Cell>
                <Cell>
                  {awards.mostLast.slice(0, 10).map((x) => (
                    <div key={x.handle}>
                      <Typo description={(ranks.get(x.handle) || 0) <= 3}>
                        {x.handle} ({x.count}회, 전체 {ranks.get(x.handle) || 0}
                        위)
                      </Typo>
                    </div>
                  ))}
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <b>한 게임을 가장 오래 플레이</b>
                  <br />
                  최대 5명
                </Cell>
                <Cell>
                  {awards.longest.slice(0, 10).map((x) => (
                    <div key={x.handle}>
                      <Typo description={(ranks.get(x.handle) || 0) <= 3}>
                        {x.handle} ({x.minutes}분, 전체{" "}
                        {ranks.get(x.handle) || 0}
                        위)
                      </Typo>
                    </div>
                  ))}
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <b>다양한 사람과 플레이</b>
                  <br />
                  최대 5명
                </Cell>
                <Cell>
                  {awards.matched.slice(0, 10).map((x) => (
                    <div key={x.handle}>
                      <Typo description={(ranks.get(x.handle) || 0) <= 3}>
                        {x.handle} ({x.people}명, 전체{" "}
                        {ranks.get(x.handle) || 0}
                        위)
                      </Typo>
                    </div>
                  ))}
                </Cell>
              </Row>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </>
  );
};

export default Awards;
