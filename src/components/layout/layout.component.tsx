import React from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
