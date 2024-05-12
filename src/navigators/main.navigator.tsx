import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
    type MainStackParamList,
    AppRoutes,
} from "~constants/navigation.constants";
import { ProfileScreen } from "~screens/main/tabs/account/profile.screen";
import { SettingsScreen } from "~screens/main/tabs/account/settings.screen";
import { Header } from "~components/layout/header.component";

import { DrawerNavigator } from "./main/drawer.navigator";

const Stack = createNativeStackNavigator<MainStackParamList>();

/*
  StackNavigator
    - Stack.Group
      - ProfileScreen
      - SettingsScreen
    - CreateScreen
    - DrawerNavigator
      - TabsNavigator
        - HomeScreen
        - CommunitiesScreen
        - MessagesScreen
        - NotificationsScreen
*/
export function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Drawer">
            <Stack.Group
                screenOptions={{
                    headerShown: true,
                    header: Header,
                }}>
                <Stack.Screen
                    name={AppRoutes.Main.Account.Profile}
                    component={ProfileScreen}
                    options={{ headerTitle: "Profile" }}
                />

                <Stack.Screen
                    name={AppRoutes.Main.Account.Settings}
                    component={SettingsScreen}
                    options={{ headerTitle: "Settings" }}
                />
            </Stack.Group>

            <Stack.Screen
                name={AppRoutes.Main.Drawer.NAVIGATOR}
                component={DrawerNavigator}
            />
        </Stack.Navigator>
    );
}
