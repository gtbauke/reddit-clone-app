import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
    AppRoutes,
    type AuthStackParamList,
} from "~constants/navigation.constants";
import { CheckYourEmailScreen } from "~screens/auth/check-your-email.screen";
import { ForgotPasswordScreen } from "~screens/auth/forgot-password.screen";
import { LoginScreen } from "~screens/auth/login.screen";

import { SignUpScreen } from "../screens/auth/sign-up.screen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={AppRoutes.Auth.Login}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={AppRoutes.Auth.Login} component={LoginScreen} />
            <Stack.Screen
                name={AppRoutes.Auth.ForgotPassword}
                component={ForgotPasswordScreen}
            />
            <Stack.Screen
                name={AppRoutes.Auth.CheckYourEmail}
                component={CheckYourEmailScreen}
            />
            <Stack.Screen
                name={AppRoutes.Auth.SignUp}
                component={SignUpScreen}
            />
        </Stack.Navigator>
    );
}
