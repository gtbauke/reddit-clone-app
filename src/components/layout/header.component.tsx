import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONT } from "src/styles/font.styles";
import { SPACE } from "src/styles/spacing.styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS } from "src/styles/colors.styles";
import { type NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";

// TODO: change this to be a normal component instead of a substitute of React Navigation Header component
export function Header({ route, navigation, options }: NativeStackHeaderProps) {
    const headerTitle = getHeaderTitle(options, route.name);

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
