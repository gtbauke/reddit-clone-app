import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    type ViewStyle,
    Text,
} from "react-native";

import { useTheme } from "~contexts/theme.context";
import { COLORS } from "~styles/colors.styles";
import { createThemedStyles } from "~styles/theme.styles";

type ButtonProps = {
    children: React.ReactNode;
    onPress: () => void;
    disabled?: boolean;
    style?: ViewStyle;
};

export function Button({
    children,
    onPress,
    disabled = false,
    style,
}: ButtonProps) {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const containerStyle = StyleSheet.compose(styles.container, style);
    const renderChildren = () => {
        if (typeof children === "string") {
            return <Text style={styles.text}>{children}</Text>;
        }

        return children;
    };

    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={onPress}
            disabled={disabled}>
            {renderChildren()}
        </TouchableOpacity>
    );
}

const getStyles = createThemedStyles(theme => ({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.PRIMARY[500],
        borderRadius: theme.BORDER_RADIUS.MEDIUM,
        paddingVertical: theme.SPACE.MEDIUM,
    },

    text: {
        color: COLORS.WHITE,
        fontSize: theme.FONT.SIZE.MEDIUM,
        fontWeight: theme.FONT.WEIGHT.BOLD,
    },
}));
