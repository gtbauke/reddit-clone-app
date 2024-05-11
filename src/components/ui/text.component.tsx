import React from "react";
import { type TextProps } from "react-native";

import { useThemedStyle } from "~hooks/use-themed-style.hook";
import { THEME } from "~styles/theme.styles";
import { createThemedStyleSheet } from "~styles/themed-style-sheet.styles";

export function Text({ children, style, ...props }: TextProps) {
    const styles = useThemedStyle(themedStyles);

    return (
        <Text {...props} style={[styles.text, style]}>
            {children}
        </Text>
    );
}

const themedStyles = createThemedStyleSheet({
    text: {
        light: {
            color: THEME.COLORS.BLACK,
        },
        dark: {
            color: THEME.COLORS.WHITE,
        },
    },
});
