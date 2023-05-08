import GAMES from "@/app/games.json";

export const gameById = (id: string) => {
  return GAMES.find((game) => game.id === id)!;
};
