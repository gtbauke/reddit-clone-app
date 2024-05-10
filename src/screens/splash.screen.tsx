import React from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { THEME } from "src/styles/theme.styles";

import { Layout } from "~components/layout/layout.component";

export function SplashScreen() {
    return (
        <Layout style={styles.container}>
            <StatusBar
                backgroundColor={THEME.COLORS.GREY[900]}
                barStyle="light-content"
                translucent
            />

            <Text>Splash Screen</Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.GREY[900],
    },
});
