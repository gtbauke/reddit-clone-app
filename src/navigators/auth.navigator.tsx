import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
    AppRoutes,
    type AuthStackParamList,
} from "~constants/navigation.constants";
import { LoginScreen } from "~screens/auth/login.screen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={AppRoutes.Auth.Login}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={AppRoutes.Auth.Login} component={LoginScreen} />
        </Stack.Navigator>
    );
}
