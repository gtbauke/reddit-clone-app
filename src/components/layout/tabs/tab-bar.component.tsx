import { type BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
    type BottomTabDescriptor,
    type BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
    type NavigationHelpers,
    type ParamListBase,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { Text } from "~components/ui/text.component";
import { AppRoutes } from "~constants/navigation.constants";
import { type Theme, createThemedStyles } from "~styles/theme.styles";
import { getTabBarLabel } from "~utils/get-tab-bar-label.utils";

type TabBarItemProps = {
    isFocused: boolean;
    descriptor: BottomTabDescriptor;
    tabNavigation: NavigationHelpers<
        ParamListBase,
        BottomTabNavigationEventMap
    >;
    theme: Theme;
};

function TabBarItem({
    isFocused,
    descriptor,
    tabNavigation,
    theme,
}: TabBarItemProps) {
    const label = getTabBarLabel(descriptor);
    const styles = themedStyles(theme);

    const onPress = () => {
        const event = tabNavigation.emit({
            type: "tabPress",
            target: descriptor.route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            tabNavigation.navigate(
                descriptor.route.name,
                descriptor.route.params,
            );
        }
    };

    const onLongPress = () => {
        tabNavigation.emit({
            type: "tabLongPress",
            target: descriptor.route.key,
        });
    };

    const tabIconColor =
        (isFocused
            ? descriptor.options.tabBarActiveTintColor
            : descriptor.options.tabBarInactiveTintColor) ?? "black";

    const renderLabel = () => {
        if (!descriptor.options.tabBarShowLabel) {
            return null;
        }

        if (typeof label === "string") {
            const textStyles = StyleSheet.compose(styles.itemLabel, {
                color: tabIconColor,
            });

            return <Text style={textStyles}>{label}</Text>;
        }

        return label({
            focused: isFocused,
            color: tabIconColor,
            position: "below-icon",
            children: "",
        });
    };

    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused }}
            accessibilityLabel={descriptor.options.tabBarAccessibilityLabel}
            testID={descriptor.options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.itemContainer}>
                {descriptor.options.tabBarIcon?.({
                    focused: isFocused,
                    color: tabIconColor,
                    size: 24,
                })}
                {renderLabel()}
            </View>
        </TouchableOpacity>
    );
}

type TabBarProps = BottomTabBarProps & {
    theme: Theme;
};

export function TabBar({ navigation, state, descriptors, theme }: TabBarProps) {
    const styles = themedStyles(theme);

    const tabsLength = state.routes.length;
    const leftTabs = state.routes.slice(0, tabsLength / 2);
    const rightTabs = state.routes.slice(tabsLength / 2, tabsLength);

    const onCreatePress = () => {
        navigation.navigate(AppRoutes.Main.Create);
    };

    return (
        <View style={styles.container}>
            {leftTabs.map((route, index) => (
                <TabBarItem
                    key={route.key}
                    isFocused={state.index === index}
                    descriptor={descriptors[route.key]}
                    tabNavigation={navigation}
                    theme={theme}
                />
            ))}

            <TouchableOpacity onPress={onCreatePress}>
                <View style={styles.itemContainer}>
                    <FeatherIcon name="plus" size={24} />
                    <Text style={styles.itemLabel}>Create</Text>
                </View>
            </TouchableOpacity>

            {rightTabs.map((route, index) => (
                <TabBarItem
                    key={route.key}
                    isFocused={state.index === index + leftTabs.length}
                    descriptor={descriptors[route.key]}
                    tabNavigation={navigation}
                    theme={theme}
                />
            ))}
        </View>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        flexDirection: "row",
        paddingVertical: theme.SPACE.SMALL,
        paddingHorizontal: theme.SPACE.XSMALL,
        backgroundColor: theme.BACKGROUND,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderTopColor: theme.BORDER_COLOR,
        borderTopWidth: 1,
    },

    itemContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: theme.SPACE.SMALL,
    },

    itemLabel: {
        fontSize: theme.FONT.SIZE.XSMALL,
    },
}));
