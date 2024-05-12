import React from "react";
import {
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    type ViewProps,
} from "react-native";

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
            <View {...props} style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
