import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { AppRoutes } from "~constants/navigation.constants";
import { SplashScreen } from "~screens/splash.screen";

import { AuthNavigator } from "./auth.navigator";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={AppRoutes.Splash}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={AppRoutes.Splash} component={SplashScreen} />

            <Stack.Screen
                name={AppRoutes.Auth.NAVIGATOR}
                component={AuthNavigator}
            />
        </Stack.Navigator>
    );
}
