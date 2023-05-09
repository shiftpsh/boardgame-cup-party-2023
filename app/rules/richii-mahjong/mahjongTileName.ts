import { MahjongTileType } from "./MahjongTile";

const mahjongTimeName = (tile: MahjongTileType) => {
  if (tile === "Ton") return "동";
  if (tile === "Nan") return "남";
  if (tile === "Shaa") return "서";
  if (tile === "Pei") return "북";
  if (tile === "Haku") return "백";
  if (tile === "Hatsu") return "발";
  if (tile === "Chun") return "중";

  if (tile.endsWith("-Dora")) {
    if (tile.startsWith("Man")) return "적5만";
    if (tile.startsWith("Pin")) return "적5통";
    if (tile.startsWith("Sou")) return "적5삭";
  }

  if (tile.startsWith("Man")) return `${tile[tile.length - 1]}만`;
  if (tile.startsWith("Pin")) return `${tile[tile.length - 1]}통`;
  if (tile.startsWith("Sou")) return `${tile[tile.length - 1]}삭`;

  return "";
};

export default mahjongTimeName;
