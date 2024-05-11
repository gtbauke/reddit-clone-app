import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";

import { FONT } from "~styles/font.styles";
import { SPACE } from "~styles/spacing.styles";
import { COLORS } from "~styles/colors.styles";

type HeaderProps = {
    title?: string;
    show?: boolean;
};

export function Header({ title, show = true }: HeaderProps) {
    const route = useRoute();
    const navigation = useNavigation();

    const headerTitle = title || route.name;

    const handleGoBackPress = useCallback(() => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }, [navigation]);

    const renderBackButton = useCallback(() => {
        if (!navigation.canGoBack()) {
            return null;
        }

        return (
            <TouchableOpacity
                onPress={handleGoBackPress}
                style={styles.iconContainer}>
                <FeatherIcon
                    name="chevron-left"
                    color={COLORS.BLACK}
                    size={24}
                />
            </TouchableOpacity>
        );
    }, [handleGoBackPress, navigation]);

    if (!show) {
        return null;
    }

    return (
        <View style={styles.container}>
            {renderBackButton()}
            <Text style={styles.text}>{headerTitle}</Text>
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

    iconContainer: {
        padding: SPACE.XSMALL,
    },

    text: {
        fontSize: FONT.SIZE.XLARGE,
        fontWeight: FONT.WEIGHT.BOLD,
        color: FONT.COLOR.BLACK,
    },
});
