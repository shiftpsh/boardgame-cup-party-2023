export const scoreWeightByRank = (players: number, rank: number) => {
  return 2 * players + 1 - rank;
};

export const totalScoreWeight = (players: number) => {
  return (players * players + (players * (players + 1)) / 2);
};

export const score = (players: number, playTime: number, rank: number) => {
  return (
    10 *
    Math.ceil(
      (scoreWeightByRank(players, rank) / totalScoreWeight(players)) *
        playTime *
        players
    )
  );
};
