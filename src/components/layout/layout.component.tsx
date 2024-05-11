import React, { useMemo } from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createThemedStyleSheet } from "~styles/themed-style-sheet.styles";
import { THEME } from "~styles/theme.styles";
import { useTheme } from "~contexts/theme.context";

import { Header } from "./header.component";

type HeaderOptions = {
    title?: string;
    headerShown?: boolean;
};

type LayoutProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    header?: HeaderOptions;
};

const DEFAULT_HEADER_OPTIONS: HeaderOptions = {
    title: "",
    headerShown: true,
};

export function Layout({ children, style, header }: LayoutProps) {
    const { theme } = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    const headerOptions = {
        ...DEFAULT_HEADER_OPTIONS,
        ...header,
    };

    const containerStyle = StyleSheet.compose(styles.container, style);

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={headerOptions.title}
                show={headerOptions.headerShown}
            />
            <View style={containerStyle}>{children}</View>
        </SafeAreaView>
    );
}

const getStyles = createThemedStyleSheet({
    container: {
        flex: 1,
        light: {
            backgroundColor: THEME.COLORS.GREY[50],
        },
        dark: {
            backgroundColor: THEME.COLORS.GREY[950],
        },
    },
});
