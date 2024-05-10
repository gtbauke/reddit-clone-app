import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppRoutes } from "../constants/navigation.constants";
import { LoginScreen } from "../screens/auth/login.screen";
import { Header } from "../components/layout/header.component";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={AppRoutes.Login}
            screenOptions={{
                header: Header,
            }}>
            <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
        </Stack.Navigator>
    );
}
