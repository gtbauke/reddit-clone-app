import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ThemeProvider } from "src/contexts/theme.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider } from "react-query";

import { flexStyles } from "~styles/utils/flex.styles";

import { RootNavigator } from "./src/navigators/root.navigator";
import { queryClient } from "./src/services/api-client";

function App(): React.JSX.Element {
    return (
        <GestureHandlerRootView style={flexStyles.full}>
            <SafeAreaView style={flexStyles.full}>
                <ThemeProvider>
                    <NavigationContainer>
                        <QueryClientProvider client={queryClient}>
                            <RootNavigator />
                        </QueryClientProvider>
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

export default App;
