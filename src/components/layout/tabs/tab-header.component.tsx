import { type BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "~components/ui/text.component";
import { FONT } from "~styles/font.styles";
import { SPACE } from "~styles/spacing.styles";
import { type StyleSheetType } from "~styles/theme.styles";

export function TabHeader({
    navigation,
    options,
    route,
}: BottomTabHeaderProps) {
    const { headerStyle, headerTitleStyle } = options;

    const containerStyles = StyleSheet.compose(
        styles.container,
        headerStyle as StyleSheetType,
    );
    const textStyles = StyleSheet.compose(
        styles.text,
        headerTitleStyle as StyleSheetType,
    );

    return (
        <View style={containerStyles}>
            <Text style={textStyles}>{route.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACE.XLARGE,
        paddingVertical: SPACE.MEDIUM,
        flexDirection: "row",
        alignItems: "center",
        gap: SPACE.SMALL,
    },

    text: {
        fontSize: FONT.SIZE.XLARGE,
        fontWeight: FONT.WEIGHT.BOLD,
        lineHeight: FONT.LINE_HEIGHT.LARGE,
    },
});
