import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
    type AccountStackParamList,
    AppRoutes,
} from "~constants/navigation.constants";
import { ProfileScreen } from "~screens/main/tabs/account/profile.screen";
import { SettingsScreen } from "~screens/main/tabs/account/settings.screen";

const Stack = createNativeStackNavigator<AccountStackParamList>();

// TODO: fix order of navigators
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
export function AccountNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name={AppRoutes.Main.Tabs.Account.Profile}
                component={ProfileScreen}
            />

            <Stack.Screen
                name={AppRoutes.Main.Tabs.Account.Settings}
                component={SettingsScreen}
            />
        </Stack.Navigator>
    );
}
