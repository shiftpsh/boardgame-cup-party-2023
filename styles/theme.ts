import { Theme } from "@emotion/react";
import { solvedThemes } from "@solved-ac/ui-react";

export const theme = {
  ...solvedThemes.light,
  color: {
    ...solvedThemes.light.color,
    text: {
      ...solvedThemes.light.color.text,
      primary: {
        ...solvedThemes.light.color.text.primary,
        dark: "#303538",
        main: "#303538",
      },
    },
  },
} satisfies Theme;
