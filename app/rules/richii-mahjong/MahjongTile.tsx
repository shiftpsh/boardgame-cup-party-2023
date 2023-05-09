"use client";

import styled from "@emotion/styled";
import { Tooltip } from "@solved-ac/ui-react";
import mahjongTimeName from "./mahjongTileName";

type ThreeDragonType = "Chun" | "Hatsu" | "Haku";
type FourWindType = "Ton" | "Nan" | "Shaa" | "Pei";

type LetterTileType = ThreeDragonType | FourWindType;

type TileNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Colors = "Man" | "Pin" | "Sou";
type AkaDora = `${Colors}5-Dora`;

type NumberTileType = `${Colors}${TileNumbers}` | AkaDora;

export type MahjongTileType = LetterTileType | NumberTileType;

const HEIGHT = 2.8;

const TileContainer = styled.span`
  position: relative;
  display: inline-block;
  height: ${HEIGHT}em;
  width: ${HEIGHT * (3 / 4)}em;
  background: url("/richii-mahjong/Front.svg") no-repeat center center;
  background-size: contain;
  border-radius: ${HEIGHT / 16}em;
  box-shadow: ${({ theme }) => theme.styles.shadow(undefined, 8)};
  vertical-align: middle;
`;

const TileImg = styled.img`
  position: absolute;
  top: ${HEIGHT * 0.1}em;
  left: ${(HEIGHT * (3 / 4 - (0.8 / 45) * 34)) / 2}em;
  height: ${HEIGHT * 0.8}em;
  width: ${HEIGHT * ((0.8 / 45) * 34)}em;
  user-select: none;
`;

export const MahjongTiles = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 0.5em;
  vertical-align: middle;
`;

interface Props {
  tile: MahjongTileType;
}

const MahjongTile = ({ tile }: Props) => {
  return (
    <Tooltip title={mahjongTimeName(tile)}>
      <TileContainer>
        <TileImg src={`/richii-mahjong/${tile}.svg`} alt={tile} />
      </TileContainer>
    </Tooltip>
  );
};

export default MahjongTile;
