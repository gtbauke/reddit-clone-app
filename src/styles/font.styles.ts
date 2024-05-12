import { COLORS } from "./colors.styles";

export const FONT = {
    SIZE: {
        XSMALL: 11,
        SMALL: 13,
        MEDIUM: 16,
        LARGE: 20,
        XLARGE: 24,
    },
    LINE_HEIGHT: {
        XSMALL: 14,
        SMALL: 16,
        MEDIUM: 20,
        LARGE: 24,
        XLARGE: 28,
    },
    WEIGHT: {
        LIGHT: "300",
        REGULAR: "400",
        BOLD: "700",
    },
    COLOR: {
        BLACK: COLORS.BLACK,
        WHITE: COLORS.WHITE,
    },
} as const;
