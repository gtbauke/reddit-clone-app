import React from "react";
import { StyleSheet, Switch, Text } from "react-native";

import { Layout } from "~components/layout/layout.component";
import { useTheme } from "~contexts/theme.context";

// TODO: understand why the app freezes when we use ThemedText component
export function LoginScreen() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Layout style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <Switch value={theme === "dark"} onChange={toggleTheme} />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
});
