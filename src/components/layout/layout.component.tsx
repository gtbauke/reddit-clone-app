import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LayoutProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

export function Layout({ children, style }: LayoutProps) {
    const containerStyle = StyleSheet.compose(styles.container, style);

    return (
        <SafeAreaView style={styles.container}>
            <View style={containerStyle}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
