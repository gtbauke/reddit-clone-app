import React from "react";
import { View } from "react-native";

import { Text } from "~components/ui/text.component";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";

export function GroupsDrawerContent() {
    const styles = useThemedStyles(themedStyles);

    return (
        <View style={styles.container}>
            <Text>Groups Drawer Content</Text>
        </View>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_ALT,
    },
}));
