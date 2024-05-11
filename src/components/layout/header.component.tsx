import React, { useCallback, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";

import { FONT } from "~styles/font.styles";
import { SPACE } from "~styles/spacing.styles";
import { COLORS } from "~styles/colors.styles";
import { createThemedStyleSheet } from "~styles/themed-style-sheet.styles";
import { useTheme } from "~contexts/theme.context";

type HeaderProps = {
    title?: string;
    show?: boolean;
};

export function Header({ title, show = true }: HeaderProps) {
    const route = useRoute();
    const navigation = useNavigation();
    const { theme } = useTheme();

    const headerTitle = title || route.name;
    const styles = useMemo(() => getStyles(theme), [theme]);

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
                    style={styles.icon}
                    size={24}
                />
            </TouchableOpacity>
        );
    }, [handleGoBackPress, navigation, styles.icon, styles.iconContainer]);

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

const getStyles = createThemedStyleSheet({
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

    icon: {
        light: {
            color: COLORS.BLACK,
        },
        dark: {
            color: COLORS.WHITE,
        },
    },

    text: {
        fontSize: FONT.SIZE.XLARGE,
        fontWeight: FONT.WEIGHT.BOLD,
        light: {
            color: FONT.COLOR.BLACK,
        },
        dark: {
            color: FONT.COLOR.WHITE,
        },
    },
});
