import {
    Text as RNText,
    StyleSheet,
    type TextProps as RNTextProps,
} from "react-native";
import React from "react";

import { createThemedStyles } from "~styles/theme.styles";
import { useTheme } from "~contexts/theme.context";

export type TextProps = RNTextProps & {
    notImportant?: boolean;
    bold?: boolean;
};

export function Text({
    notImportant = false,
    bold = false,
    ...props
}: TextProps) {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const textStyle = StyleSheet.compose(styles.text, props.style);

    return (
        <RNText
            {...props}
            style={[
                textStyle,
                notImportant && styles.notImportant,
                bold && styles.bold,
            ]}
        />
    );
}

const getStyles = createThemedStyles(theme => ({
    text: {
        color: theme.TEXT,
        lineHeight: 18, // TODO: add line height to theme
    },

    notImportant: {
        color: theme.TEXT_ALT,
    },

    bold: {
        fontWeight: theme.FONT.WEIGHT.BOLD,
    },
}));
