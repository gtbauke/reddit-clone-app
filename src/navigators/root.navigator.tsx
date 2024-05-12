import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useTheme } from "src/contexts/theme.context";
import { StatusBar } from "react-native";

import {
    AppRoutes,
    type AppStackParamList,
} from "~constants/navigation.constants";
import { SplashScreen } from "~screens/splash.screen";

import { AuthNavigator } from "./auth.navigator";
import { MainNavigator } from "./main.navigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

export function RootNavigator() {
    const { theme, themeKey } = useTheme();
    const statusBarStyle =
        themeKey === "dark" ? "light-content" : "dark-content";

    return (
        <>
            <StatusBar
                backgroundColor={theme.BACKGROUND}
                barStyle={statusBarStyle}
                translucent
            />
            <Stack.Navigator
                initialRouteName={AppRoutes.Splash}
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen
                    name={AppRoutes.Splash}
                    component={SplashScreen}
                />

                {/* TODO: conditional render right navigator depending if user is logged in or not */}
                <Stack.Screen
                    name={AppRoutes.Auth.NAVIGATOR}
                    component={AuthNavigator}
                />

                <Stack.Screen
                    name={AppRoutes.Main.NAVIGATOR}
                    component={MainNavigator}
                />
            </Stack.Navigator>
        </>
    );
}
