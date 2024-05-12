import React from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";

import { useTheme } from "~contexts/theme.context";
import { createThemedStyles } from "~styles/theme.styles";

type LayoutProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

export function Layout({ children, style }: LayoutProps) {
    const { theme } = useTheme();

    const styles = getStyles(theme);
    const containerStyle = StyleSheet.compose(styles.contentContainer, style);

    return <View style={containerStyle}>{children}</View>;
}

const getStyles = createThemedStyles(theme => ({
    contentContainer: {
        flex: 1,
        backgroundColor: theme.BACKGROUND,
        paddingHorizontal: theme.SPACE.XLARGE,
    },
}));
