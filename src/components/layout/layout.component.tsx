import React from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "~contexts/theme.context";
import { createThemedStyles } from "~styles/theme.styles";

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
    const headerOptions = {
        ...DEFAULT_HEADER_OPTIONS,
        ...header,
    };

    const styles = getStyles(theme);
    const containerStyle = StyleSheet.compose(styles.contentContainer, style);

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

const getStyles = createThemedStyles(theme => ({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND,
    },

    contentContainer: {
        flex: 1,
        paddingHorizontal: theme.SPACE.XLARGE,
    },
}));
