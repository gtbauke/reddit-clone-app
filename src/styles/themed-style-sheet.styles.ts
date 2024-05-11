import { type ImageStyle, type TextStyle, type ViewStyle } from "react-native";
import { type ThemeKeys } from "src/contexts/theme.context";

type ThemedStyleSheet = {
    [key: string]: (ViewStyle | TextStyle | ImageStyle) & {
        dark?: ViewStyle | TextStyle | ImageStyle;
        light?: ViewStyle | TextStyle | ImageStyle;
    };
};

type ResponseStyle<T extends ThemedStyleSheet> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export function createThemedStyleSheet<T extends ThemedStyleSheet>(styles: T) {
    return function processStyles(key: ThemeKeys) {
        const finalStyles = {} as ResponseStyle<T>;

        const entries = Object.entries(styles);
        for (const [styleKey, styleValue] of entries) {
            const themedStyle = styleValue[key] ?? {};
            const baseStyles = Object.keys(styleValue).reduce((acc, curr) => {
                if (curr !== "dark" && curr !== "light") {
                    acc[curr] = (
                        styleValue as Record<
                            string,
                            ViewStyle | TextStyle | ImageStyle
                        >
                    )[curr];
                }

                return acc;
            }, {} as { [key: string]: ViewStyle | TextStyle | ImageStyle });

            const partialStyle = {
                ...baseStyles,
                ...themedStyle,
            };

            (finalStyles as Record<string, unknown>)[styleKey] = partialStyle;
        }

        return finalStyles;
    };
}
