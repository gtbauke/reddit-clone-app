import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

import {
    AppRoutes,
    type TabsStackParamList,
} from "~constants/navigation.constants";
import { CommunitiesScreen } from "~screens/main/tabs/communities.screen";
import { CreateScreen } from "~screens/main/tabs/create.screen";
import { HomeScreen } from "~screens/main/tabs/home.screen";
import { MessagesScreen } from "~screens/main/tabs/messages.screen";
import { NotificationsScreen } from "~screens/main/tabs/notifications.screen";
import { COLORS } from "~styles/colors.styles";
import { SPACE } from "~styles/spacing.styles";

const Tab = createBottomTabNavigator<TabsStackParamList>();

function TabBarIcon({
    name,
    color,
    size,
}: {
    name: string;
    color: string;
    size: number;
}) {
    return <FeatherIcon name={name} size={size} color={color} />;
}

function HomeTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="home" color={color} size={24} />;
}

function CommunitiesTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="users" color={color} size={24} />;
}

function CreateTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="plus" color={color} size={24} />;
}

function MessagesTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="message-square" color={color} size={24} />;
}

function NotificationsTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="bell" color={color} size={24} />;
}

export function TabsNavigator() {
    return (
        <Tab.Navigator
            backBehavior="history"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: SPACE.XSMALL,
                },
            }}
            initialRouteName={AppRoutes.Main.Drawer.Tabs.Home}>
            <Tab.Screen
                name={AppRoutes.Main.Drawer.Tabs.Home}
                component={HomeScreen}
                options={{
                    tabBarIcon: HomeTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Drawer.Tabs.Communities}
                component={CommunitiesScreen}
                options={{
                    tabBarIcon: CommunitiesTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Drawer.Tabs.Create}
                component={CreateScreen}
                options={{
                    tabBarIcon: CreateTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Drawer.Tabs.Messages}
                component={MessagesScreen}
                options={{
                    tabBarIcon: MessagesTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Drawer.Tabs.Notifications}
                component={NotificationsScreen}
                options={{
                    tabBarIcon: NotificationsTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
        </Tab.Navigator>
    );
}
