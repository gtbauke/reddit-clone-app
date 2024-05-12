import { type BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";

import { Text } from "~components/ui/text.component";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";

export function TabHeader({
    navigation,
    options,
    route,
}: BottomTabHeaderProps) {
    const styles = useThemedStyles(themedStyles);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{route.name}</Text>
        </View>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        paddingHorizontal: theme.SPACE.XLARGE,
        paddingVertical: theme.SPACE.MEDIUM,
        backgroundColor: theme.BACKGROUND,
        flexDirection: "row",
        alignItems: "center",
        gap: theme.SPACE.SMALL,
    },

    text: {
        fontSize: theme.FONT.SIZE.XLARGE,
        fontWeight: theme.FONT.WEIGHT.BOLD,
        lineHeight: theme.FONT.LINE_HEIGHT.LARGE,
        color: theme.TEXT,
    },
}));
