import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
    AppRoutes,
    type AuthStackParamList,
} from "~constants/navigation.constants";
import { CheckYourEmailScreen } from "~screens/auth/check-your-email.screen";
import { ForgotPasswordScreen } from "~screens/auth/forgot-password.screen";
import { LoginScreen } from "~screens/auth/login.screen";
import { Header } from "~components/layout/header.component";

import { SignUpScreen } from "../screens/auth/sign-up.screen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={AppRoutes.Auth.Login}
            screenOptions={{
                header: Header,
            }}>
            <Stack.Screen
                name={AppRoutes.Auth.Login}
                component={LoginScreen}
                options={{ headerTitle: "Login" }}
            />
            <Stack.Screen
                name={AppRoutes.Auth.ForgotPassword}
                component={ForgotPasswordScreen}
                options={{ headerTitle: "Forgot password" }}
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
