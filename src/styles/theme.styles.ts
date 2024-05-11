import { COLORS } from "./colors.styles";
import { FONT } from "./font.styles";
import { SPACE } from "./spacing.styles";

export const THEME = {
    FONT,
    SPACE,
    COLORS,

    dark: {
        PRIMARY: COLORS.ORANGE_REVERSED,
    },

    light: {
        PRIMARY: COLORS.ORANGE,
    },
} as const;

export type ThemeType = typeof THEME;
