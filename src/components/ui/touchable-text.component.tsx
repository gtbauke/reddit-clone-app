import React from "react";
import { TouchableOpacity } from "react-native";

import { Text, type TextProps } from "./text.component";

type TouchableTextProps = TextProps & {
    children: React.ReactNode;
    onPress: () => void;
};

export function TouchableText({
    children,
    onPress,
    ...props
}: TouchableTextProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text {...props}>{children}</Text>
        </TouchableOpacity>
    );
}
