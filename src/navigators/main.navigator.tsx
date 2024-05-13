import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
    type MainStackParamList,
    AppRoutes,
} from "~constants/navigation.constants";
import { ProfileScreen } from "~screens/main/account/profile.screen";
import { SettingsScreen } from "~screens/main/account/settings.screen";
import { Header } from "~components/layout/header.component";
import { CreateScreen } from "~screens/main/create.screen";

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
                header: Header,
            }}
            initialRouteName="Drawer">
            <Stack.Group
                screenOptions={{
                    headerShown: true,
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

            <Stack.Group
                screenOptions={{
                    presentation: "modal",
                    headerShown: true,
                }}>
                <Stack.Screen
                    name={AppRoutes.Main.Create}
                    component={CreateScreen}
                />
            </Stack.Group>

            <Stack.Screen
                name={AppRoutes.Main.Drawer.NAVIGATOR}
                component={DrawerNavigator}
            />
        </Stack.Navigator>
    );
}
