import React, { useRef } from "react";
import {
    Text,
    TextInput,
    type TextInputProps,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import { useTheme } from "~contexts/theme.context";
import { createThemedStyles } from "~styles/theme.styles";

type InputProps = TextInputProps & {
    label: string;
};

export function Input({ label, ...props }: InputProps) {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const inputStyles = StyleSheet.compose(styles.input, props.style);

    const inputRef = useRef<TextInput>(null);

    const handleOnViewPress = () => {
        inputRef.current?.focus();
    };

    return (
        <TouchableWithoutFeedback onPress={handleOnViewPress}>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput ref={inputRef} {...props} style={inputStyles} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const getStyles = createThemedStyles(theme => ({
    container: {
        width: "100%",
        gap: theme.SPACE.SMALL,
    },

    label: {
        color: theme.TEXT,
        fontSize: theme.FONT.SIZE.MEDIUM,
        fontWeight: theme.FONT.WEIGHT.BOLD,
    },

    input: {
        borderRadius: theme.BORDER_RADIUS.MEDIUM,
        borderColor: theme.PRIMARY[300],
        borderWidth: 1,
        backgroundColor: theme.PRIMARY[50],
        paddingHorizontal: theme.SPACE.MEDIUM,
        fontSize: theme.FONT.SIZE.MEDIUM,
    },
}));
