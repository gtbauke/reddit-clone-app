import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

import {
    AppRoutes,
    type TabsStackParamList,
    type MainStackParamList,
} from "~constants/navigation.constants";
import { CommunitiesScreen } from "~screens/main/tabs/communities.screen";
import { HomeScreen } from "~screens/main/tabs/home.screen";
import { MessagesScreen } from "~screens/main/tabs/messages.screen";
import { NotificationsScreen } from "~screens/main/tabs/notifications.screen";
import { COLORS } from "~styles/colors.styles";
import { ProfileScreen } from "~screens/main/profile.screen";
import { SettingsScreen } from "~screens/main/settings.screen";

// TODO: Fix weird padding on drawer screens
// TODO: Fix drawer header in tab screens

const Drawer = createDrawerNavigator<MainStackParamList>();
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

function MessagesTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="message-square" color={color} size={24} />;
}

function NotificationsTabIcon({ color }: { color: string; focused: boolean }) {
    return <TabBarIcon name="bell" color={color} size={24} />;
}

// TODO: maybe add a custom tab bar
function TabNavigator() {
    return (
        <Tab.Navigator
            backBehavior="history"
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={AppRoutes.Main.Tabs.Home}>
            <Tab.Screen
                name={AppRoutes.Main.Tabs.Home}
                component={HomeScreen}
                options={{
                    tabBarIcon: HomeTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                    headerTitle: "",
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Tabs.Communities}
                component={CommunitiesScreen}
                options={{
                    tabBarIcon: CommunitiesTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                    headerTitle: "Communities",
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Tabs.Messages}
                component={MessagesScreen}
                options={{
                    tabBarIcon: MessagesTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
            <Tab.Screen
                name={AppRoutes.Main.Tabs.Notifications}
                component={NotificationsScreen}
                options={{
                    tabBarIcon: NotificationsTabIcon,
                    tabBarActiveTintColor: COLORS.ORANGE[500],
                }}
            />
        </Tab.Navigator>
    );
}

export function MainNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Tabs"
            screenOptions={{
                drawerActiveTintColor: COLORS.ORANGE[500],
            }}>
            <Drawer.Screen
                name={AppRoutes.Main.Tabs.NAVIGATOR}
                component={TabNavigator}
                options={{
                    drawerLabel: "Home",
                    headerTitle: "",
                }}
            />
            <Drawer.Screen
                name={AppRoutes.Main.Profile}
                component={ProfileScreen}
                options={{ drawerLabel: "Profile" }}
            />
            <Drawer.Screen
                name={AppRoutes.Main.Settings}
                component={SettingsScreen}
                options={{ drawerLabel: "Settings" }}
            />
        </Drawer.Navigator>
    );
}
