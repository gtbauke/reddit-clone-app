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
    BACKGROUND: Color;

    FONT: typeof FONT;
    SPACE: typeof SPACE;
};

const BASE_THEME = {
    FONT: FONT,
    SPACE: SPACE,
};

export const DARK_THEME: Theme = {
    ...BASE_THEME,

    PRIMARY: COLORS.ORANGE_REVERSED,
    TEXT: COLORS.WHITE,
    BACKGROUND: COLORS.GREY[950],
};

export const LIGHT_THEME: Theme = {
    ...BASE_THEME,

    PRIMARY: COLORS.ORANGE,
    TEXT: COLORS.BLACK,
    BACKGROUND: COLORS.GREY[50],
};

type StyleSheetType = Record<string, ViewStyle | TextStyle | ImageStyle>;
type CreateThemedStylesBuilder<T extends StyleSheetType> = (theme: Theme) => T;

export function createThemedStyles<T extends StyleSheetType>(
    builder: CreateThemedStylesBuilder<T>,
) {
    return (theme: Theme) => builder(theme);
}
