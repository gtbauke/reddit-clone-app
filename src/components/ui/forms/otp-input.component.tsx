import React, { useRef } from "react";
import { View, TextInput } from "react-native";

import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";

type OtpInputProps = {
    maxLength: number;
    value: string;
    setValue: (value: string | ((last: string) => string)) => void;
};

// TODO: make this work, maybe it is better to use a library
export function OtpInput({ maxLength, value, setValue }: OtpInputProps) {
    const styles = useThemedStyles(themedStyles);
    const paddedValue = value.padEnd(maxLength, " ").split("");

    const refs = useRef<TextInput[]>([]);

    const focusNext = (index: number) => {
        if (index < maxLength - 1) {
            refs.current[index].focus();
        }
    };

    const handleOnChangeText = (text: string, index: number) => {
        // TODO: make this work
        // maybe there is a way to check which key was pressed
        if (value.length === maxLength && text.length > 0) {
            return;
        }

        if (text === "" && index > 0) {
            focusNext(index - 1);
        }

        const newValue = [...paddedValue];
        newValue[index] = text.trim();
        setValue(newValue.join("").trim());

        if (text.length >= 1 && index < maxLength) {
            focusNext(index + 1);
        }

        if (text.length === 0 && value.length < index && index > 0) {
            focusNext(index - 1);
        }
    };

    return (
        <View style={styles.container}>
            {paddedValue.map((inputValue, index) => (
                <View key={index} style={styles.input}>
                    <TextInput
                        style={styles.inputField}
                        inputMode="numeric"
                        keyboardType="number-pad"
                        ref={ref => {
                            refs.current[index] = ref as TextInput;
                        }}
                        value={inputValue}
                        onChangeText={text => handleOnChangeText(text, index)}
                    />
                </View>
            ))}
        </View>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    input: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: theme.BORDER_RADIUS.MEDIUM,
        borderColor: theme.PRIMARY[300],
        borderWidth: 1,
        backgroundColor: theme.PRIMARY[50],
        height: 52,
        width: 52,
    },

    inputField: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: theme.FONT.SIZE.MEDIUM,
        width: "100%",
        height: "100%",
    },
}));
