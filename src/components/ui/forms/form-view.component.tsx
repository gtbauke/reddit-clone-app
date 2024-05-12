import React from "react";
import {
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    type ViewProps,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type FormViewProps = ViewProps & {
    children: React.ReactNode;
};

export function FormView({ children, ...props }: FormViewProps) {
    const handleOnViewPress = () => {
        Keyboard.dismiss();
    };

    const containerStyles = StyleSheet.compose(styles.container, props.style);

    return (
        <TouchableWithoutFeedback onPress={handleOnViewPress}>
            <KeyboardAwareScrollView style={styles.container}>
                <View {...props} style={containerStyles}>
                    {children}
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
