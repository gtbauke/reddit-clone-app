import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ThemeProvider } from "src/contexts/theme.context";

import { RootNavigator } from "./src/navigators/root.navigator";

function App(): React.JSX.Element {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;
