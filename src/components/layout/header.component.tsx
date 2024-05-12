import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { type NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";

import { createThemedStyles } from "~styles/theme.styles";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";

export function Header({ navigation, options, route }: NativeStackHeaderProps) {
    const styles = useThemedStyles(getStyles);
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
            <TouchableOpacity onPress={handleGoBackPress}>
                <FeatherIcon
                    name="chevron-left"
                    style={styles.icon}
                    size={24}
                />
            </TouchableOpacity>
        );
    }, [handleGoBackPress, navigation, styles.icon]);

    return (
        <View style={styles.container}>
            {renderBackButton()}
            <Text style={styles.text}>{headerTitle}</Text>
        </View>
    );
}

const getStyles = createThemedStyles(theme => ({
    container: {
        paddingHorizontal: theme.SPACE.XLARGE,
        paddingVertical: theme.SPACE.MEDIUM,
        flexDirection: "row",
        alignItems: "center",
        gap: theme.SPACE.SMALL,
        backgroundColor: theme.BACKGROUND,
    },

    icon: {
        color: theme.TEXT,
    },

    text: {
        fontSize: theme.FONT.SIZE.XLARGE,
        fontWeight: theme.FONT.WEIGHT.BOLD,
        color: theme.TEXT,
    },
}));
