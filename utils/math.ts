export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const clampPlayerCount = (value: number) => clamp(value, 2, 10);

export const clampMinutes = (value: number) => clamp(value, 1, 300);
