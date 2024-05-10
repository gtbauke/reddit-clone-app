import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { AppRoutes } from "~constants/navigation.constants";
import { LoginScreen } from "~screens/auth/login.screen";

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName={AppRoutes.Auth.Login}>
            <Stack.Screen name={AppRoutes.Auth.Login} component={LoginScreen} />
        </Stack.Navigator>
    );
}
