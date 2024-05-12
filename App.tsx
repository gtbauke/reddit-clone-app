import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ThemeProvider } from "src/contexts/theme.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootNavigator } from "./src/navigators/root.navigator";

function App(): React.JSX.Element {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}

export default App;
