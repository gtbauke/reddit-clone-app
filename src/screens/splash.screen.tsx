import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "src/contexts/theme.context";
import { THEME } from "src/styles/theme.styles";
import { createThemedStyleSheet } from "src/styles/themed-style-sheet.styles";

import { Layout } from "~components/layout/layout.component";

export function SplashScreen() {
    const { theme } = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Auth", { screen: "Login" });
        }, 1000);
    }, [navigation]);

    return (
        <Layout style={styles.container}>
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <View style={styles.finalCircle} />
                </View>
            </View>
        </Layout>
    );
}

const getStyles = createThemedStyleSheet({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        dark: {
            backgroundColor: THEME.COLORS.GREY[950],
        },
        light: {
            backgroundColor: THEME.COLORS.GREY[50],
        },
    },

    text: {
        dark: {
            color: THEME.COLORS.ORANGE_REVERSED[950],
        },
        light: {
            color: THEME.COLORS.ORANGE[950],
        },
    },

    outerCircle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: THEME.COLORS.ORANGE[500],
        justifyContent: "center",
        alignItems: "center",
    },

    innerCircle: {
        width: 70,
        height: 70,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        dark: {
            backgroundColor: THEME.COLORS.ORANGE_REVERSED[600],
        },
        light: {
            backgroundColor: THEME.COLORS.ORANGE[400],
        },
    },

    finalCircle: {
        width: 40,
        height: 40,
        borderRadius: 40,
        dark: {
            backgroundColor: THEME.COLORS.ORANGE_REVERSED[700],
        },
        light: {
            backgroundColor: THEME.COLORS.ORANGE[300],
        },
    },
});
