import React from "react";
import { Pressable, type TextStyle, View } from "react-native";

import { Text } from "~components/ui/text.component";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";

type AccountDrawerItemProps = {
    renderIcon: ({ style }: { style: TextStyle }) => React.ReactNode;
    label: string;
    onPress: () => void;
};

export function AccountDrawerItem({
    renderIcon,
    label,
    onPress,
}: AccountDrawerItemProps) {
    const styles = useThemedStyles(themedStyles);

    return (
        <Pressable onPress={onPress}>
            {({ pressed }) => (
                <View
                    style={[
                        styles.container,
                        pressed && styles.pressedContainer,
                    ]}>
                    {renderIcon({ style: styles.icon })}
                    <Text>{label}</Text>
                </View>
            )}
        </Pressable>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        flexDirection: "row",
        paddingHorizontal: theme.SPACE.LARGE,
        paddingVertical: theme.SPACE.MEDIUM,
        gap: theme.SPACE.SMALL,
    },

    pressedContainer: {
        backgroundColor: theme.BACKGROUND_ALT,
    },

    icon: {
        color: theme.TEXT,
    },
}));
