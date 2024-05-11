import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useTheme } from "src/contexts/theme.context";
import { StatusBar } from "react-native";
import { THEME } from "src/styles/theme.styles";

import {
    AppRoutes,
    type AppStackParamList,
} from "~constants/navigation.constants";
import { SplashScreen } from "~screens/splash.screen";

import { AuthNavigator } from "./auth.navigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

export function RootNavigator() {
    const { theme } = useTheme();
    const statusBarBackground =
        theme === "dark" ? THEME.COLORS.GREY[950] : THEME.COLORS.GREY[50];
    const statusBarStyle = theme === "dark" ? "light-content" : "dark-content";

    return (
        <>
            <StatusBar
                backgroundColor={statusBarBackground}
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

                <Stack.Screen
                    name={AppRoutes.Auth.NAVIGATOR}
                    component={AuthNavigator}
                />
            </Stack.Navigator>
        </>
    );
}
