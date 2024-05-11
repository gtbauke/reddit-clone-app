import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View } from "react-native";
import { useTheme } from "src/contexts/theme.context";

import { Layout } from "~components/layout/layout.component";
import { createThemedStyles } from "~styles/theme.styles";

export function SplashScreen() {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const navigation = useNavigation();

    const handleFocusEffect = useCallback(() => {
        setTimeout(() => {
            navigation.navigate("Auth", { screen: "Login" });
        }, 1000);
    }, [navigation]);

    useFocusEffect(handleFocusEffect);

    return (
        <Layout style={styles.container} header={{ headerShown: false }}>
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <View style={styles.finalCircle} />
                </View>
            </View>
        </Layout>
    );
}

const getStyles = createThemedStyles(theme => ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.BACKGROUND,
    },

    text: {
        color: theme.PRIMARY[500],
    },

    outerCircle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: theme.PRIMARY[500],
        justifyContent: "center",
        alignItems: "center",
    },

    innerCircle: {
        width: 70,
        height: 70,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.PRIMARY[300],
    },

    finalCircle: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: theme.PRIMARY[100],
    },
}));
