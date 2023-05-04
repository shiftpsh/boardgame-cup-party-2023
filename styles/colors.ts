export const COLOR_FIRST_PLACE = "rgb(236, 154, 0)";
export const COLOR_SECOND_PLACE = "rgb(67, 95, 122)";
export const COLOR_THIRD_PLACE = "rgb(173, 86, 0)";

export const rankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return COLOR_FIRST_PLACE;
    case 2:
      return COLOR_SECOND_PLACE;
    case 3:
      return COLOR_THIRD_PLACE;
    default:
      return "inherit";
  }
};
