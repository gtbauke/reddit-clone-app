import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

import {
    AppRoutes,
    type MainStackParamList,
} from "~constants/navigation.constants";
import { CommunitiesScreen } from "~screens/main/communities.screen";
import { HomeScreen } from "~screens/main/home.screen";
import { MessagesScreen } from "~screens/main/messages.screen";
import { NotificationsScreen } from "~screens/main/notifications.screen";
import { COLORS } from "~styles/colors.styles";

const Tab = createBottomTabNavigator<MainStackParamList>();

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

function MessagesTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="message-square" color={color} size={24} />;
}

function NotificationsTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="bell" color={color} size={24} />;
}

// TODO: maybe add a custom tab bar
export function MainNavigator() {
    return (
        <Tab.Navigator
            backBehavior="history"
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={AppRoutes.Main.Home}>
            <Tab.Screen
                name={AppRoutes.Main.Home}
                component={HomeScreen}
                options={{
                    tabBarIcon: HomeTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Communities}
                component={CommunitiesScreen}
                options={{
                    tabBarIcon: CommunitiesTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Messages}
                component={MessagesScreen}
                options={{
                    tabBarIcon: MessagesTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Notifications}
                component={NotificationsScreen}
                options={{
                    tabBarIcon: NotificationsTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
        </Tab.Navigator>
    );
}
