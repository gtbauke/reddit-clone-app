import React, { useRef, useState } from "react";
import {
    TextInput,
    type TextInputProps,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { useTheme } from "~contexts/theme.context";
import { createThemedStyles } from "~styles/theme.styles";

import { Text } from "../text.component";

type InputProps = TextInputProps & {
    label: string;
    error?: string;
};

export function Input({ label, error, ...props }: InputProps) {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const [showSecureText, setShowSecureText] = useState(true);

    const inputStyles = StyleSheet.compose(styles.inputText, props.style);
    const inputRef = useRef<TextInput>(null);

    const handleOnViewPress = () => {
        inputRef.current?.focus();
    };

    const toggleShowSecureText = () => {
        setShowSecureText(prev => !prev);
    };

    return (
        <TouchableWithoutFeedback onPress={handleOnViewPress}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.label}>{label}</Text>
                    <View
                        style={[
                            styles.input,
                            error ? styles.errorInput : null,
                            !props.secureTextEntry
                                ? styles.paddedContainer
                                : null,
                        ]}>
                        <TextInput
                            ref={inputRef}
                            {...props}
                            style={inputStyles}
                            secureTextEntry={
                                props.secureTextEntry && showSecureText
                            }
                        />
                        {props.secureTextEntry && (
                            <TouchableWithoutFeedback
                                onPress={toggleShowSecureText}>
                                <View style={styles.secureTextToggle}>
                                    <FeatherIcon
                                        name={
                                            showSecureText ? "eye" : "eye-off"
                                        }
                                        size={20}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    </View>
                </View>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: theme.BORDER_RADIUS.MEDIUM,
        borderColor: theme.PRIMARY[300],
        borderWidth: 1,
        backgroundColor: theme.PRIMARY[50],
        paddingLeft: theme.SPACE.MEDIUM,
        height: 52,
    },

    paddedContainer: {
        paddingHorizontal: theme.SPACE.MEDIUM,
    },

    inputText: {
        fontSize: theme.FONT.SIZE.MEDIUM,
    },

    errorInput: {
        borderColor: theme.COLORS.RED,
    },

    errorMessage: {
        color: theme.COLORS.RED,
        fontWeight: theme.FONT.WEIGHT.BOLD,
    },

    secureTextToggle: {
        backgroundColor: theme.PRIMARY[100],
        paddingHorizontal: theme.SPACE.MEDIUM,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderLeftColor: theme.PRIMARY[300],
        borderLeftWidth: 1,
    },
}));
