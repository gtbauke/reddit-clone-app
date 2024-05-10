import React from "react";
import { StyleSheet, Text } from "react-native";
import { Layout } from "../../components/layout/layout.component";

export function LoginScreen() {
    return (
        <Layout style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
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
