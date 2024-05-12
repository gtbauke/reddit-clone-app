import { type BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";

import { Text } from "~components/ui/text.component";

export function TabHeader({
    navigation,
    options,
    route,
}: BottomTabHeaderProps) {
    return (
        <View>
            <Text>{route.name}</Text>
        </View>
    );
}
