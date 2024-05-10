import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";

import { RootNavigator } from "./src/navigators/root.navigator";

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <NavigationContainer>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor="#ffffff"
            />
            <RootNavigator />
        </NavigationContainer>
    );
}

export default App;
