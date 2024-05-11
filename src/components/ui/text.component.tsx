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
};

export function Text({ notImportant = false, ...props }: TextProps) {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const textStyle = StyleSheet.compose(styles.text, props.style);

    return (
        <RNText
            {...props}
            style={[textStyle, notImportant && styles.notImportant]}
        />
    );
}

const getStyles = createThemedStyles(theme => ({
    text: {
        color: theme.TEXT,
    },

    notImportant: {
        color: theme.TEXT_ALT,
    },
}));
