import { type ImageStyle, type TextStyle, type ViewStyle } from "react-native";

import { COLORS } from "./colors.styles";
import { FONT } from "./font.styles";
import { SPACE } from "./spacing.styles";

type ColorPalette = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
};

type Color = string;

export type Theme = {
    PRIMARY: ColorPalette;
    TEXT: Color;
    TEXT_ALT: Color;
    BACKGROUND: Color;
    BACKGROUND_ALT: Color;
    BORDER_COLOR: Color;

    FONT: typeof FONT;
    SPACE: typeof SPACE;

    BORDER_RADIUS: {
        SMALL: number;
        MEDIUM: number;
        LARGE: number;
    };

    COLORS: typeof COLORS;
};

const BASE_THEME = {
    FONT,
    SPACE,
    BORDER_RADIUS: {
        SMALL: 5,
        MEDIUM: 10,
        LARGE: 20,
    },
    COLORS,
};

export const DARK_THEME: Theme = {
    ...BASE_THEME,

    PRIMARY: COLORS.ORANGE_REVERSED,
    TEXT: COLORS.WHITE,
    TEXT_ALT: COLORS.GREY[200],
    BACKGROUND: COLORS.GREY[950],
    BACKGROUND_ALT: COLORS.GREY[800],
    BORDER_COLOR: COLORS.GREY[700],
};

export const LIGHT_THEME: Theme = {
    ...BASE_THEME,

    PRIMARY: COLORS.ORANGE,
    TEXT: COLORS.BLACK,
    TEXT_ALT: COLORS.GREY[700],
    BACKGROUND: COLORS.GREY[50],
    BACKGROUND_ALT: COLORS.GREY[100],
    BORDER_COLOR: COLORS.GREY[200],
};

export type StyleSheetType = Record<string, ViewStyle | TextStyle | ImageStyle>;
export type CreateThemedStylesBuilder<
    T extends StyleSheetType = StyleSheetType,
> = (theme: Theme) => T;

export function createThemedStyles<T extends StyleSheetType>(
    builder: CreateThemedStylesBuilder<T>,
) {
    return (theme: Theme) => builder(theme);
}
