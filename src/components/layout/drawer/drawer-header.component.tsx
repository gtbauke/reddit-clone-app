import { type DrawerHeaderProps } from "@react-navigation/drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import React from "react";
import {
    StyleSheet,
    type TextStyle,
    View,
    TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { Text } from "~components/ui/text.component";
import { useAccountDrawer } from "~contexts/drawer.context";
import { FONT } from "~styles/font.styles";
import { SPACE } from "~styles/spacing.styles";
import { type StyleSheetType } from "~styles/theme.styles";

export function DrawerHeader({
    navigation,
    options,
    route,
}: DrawerHeaderProps) {
    const { toggle: toggleAccountDrawer } = useAccountDrawer();

    const headerTitle = getHeaderTitle(options, route.name);
    const { headerTitleStyle, headerStyle } = options;

    const containerStyles = StyleSheet.compose(
        styles.container,
        headerStyle as StyleSheetType,
    );

    const titleStyles = StyleSheet.compose(
        styles.text,
        headerTitleStyle as TextStyle,
    );

    const onIconPress = () => {
        navigation.toggleDrawer();
    };

    return (
        <View style={containerStyles}>
            <View style={styles.leftContainer}>
                <TouchableOpacity onPress={onIconPress}>
                    <FeatherIcon name="menu" size={24} />
                </TouchableOpacity>
                <Text style={titleStyles}>{headerTitle}</Text>
            </View>
            <TouchableOpacity onPress={toggleAccountDrawer}>
                <View style={styles.accountImagePlaceholder} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACE.XLARGE,
        paddingVertical: SPACE.MEDIUM,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    leftContainer: {
        flexDirection: "row",
        gap: SPACE.SMALL,
    },

    text: {
        fontSize: FONT.SIZE.LARGE,
        fontWeight: FONT.WEIGHT.BOLD,
        lineHeight: FONT.LINE_HEIGHT.LARGE,
    },

    accountImagePlaceholder: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "gray",
    },
});
