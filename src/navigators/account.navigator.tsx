import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
    type AccountStackParamList,
    AppRoutes,
} from "~constants/navigation.constants";
import { ProfileScreen } from "~screens/main/profile.screen";
import { SettingsScreen } from "~screens/main/settings.screen";

const Stack = createNativeStackNavigator<AccountStackParamList>();

export function AccountNavigator() {
    return (
        <Stack.Navigator>
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
