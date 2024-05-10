import { COLORS } from "./colors.style";

export const FONT = {
    SIZE: {
        XSMALL: 10,
        SMALL: 13,
        MEDIUM: 16,
        LARGE: 20,
        XLARGE: 24,
    },
    WEIGHT: {
        LIGHT: "300",
        REGULAR: "400",
        BOLD: "700",
    },
    COLOR: {
        BLACK: COLORS.BLACK,
    },
} as const;
