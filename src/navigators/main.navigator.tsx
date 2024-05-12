import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useMemo, useState } from "react";
import { Drawer as NativeDrawer } from "react-native-drawer-layout";

import {
    AppRoutes,
    type MainStackParamList,
} from "~constants/navigation.constants";
import { Text } from "~components/ui/text.component";
import { DrawerHeader } from "~components/layout/drawer/drawer-header.component";
import {
    getHeaderTitleStyles,
    getTabHeaderTitle,
} from "~utils/get-header-title.utils";
import { useTheme } from "~contexts/theme.context";
import { AccountDrawerContext } from "~contexts/drawer.context";

import { TabsNavigator } from "./tabs.navigator";

const Drawer = createDrawerNavigator<MainStackParamList>();

export function MainNavigator() {
    const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
    const value = useMemo(
        () => ({
            open: () => setIsRightDrawerOpen(true),
            close: () => setIsRightDrawerOpen(false),
            toggle: () => setIsRightDrawerOpen(prev => !prev),
        }),
        [],
    );

    const { theme } = useTheme();

    return (
        <NativeDrawer
            open={isRightDrawerOpen}
            onOpen={() => setIsRightDrawerOpen(true)}
            onClose={() => setIsRightDrawerOpen(false)}
            drawerPosition="right"
            renderDrawerContent={() => <Text>Testing right drawer</Text>}>
            <AccountDrawerContext.Provider value={value}>
                <Drawer.Navigator
                    screenOptions={{
                        header: DrawerHeader,
                        headerStyle: { backgroundColor: theme.BACKGROUND },
                    }}>
                    <Drawer.Screen
                        name={AppRoutes.Main.Tabs.NAVIGATOR}
                        component={TabsNavigator}
                        options={({ route }) => ({
                            drawerItemStyle: { display: "none" },
                            headerTitle: getTabHeaderTitle(route),
                            headerTitleStyle: getHeaderTitleStyles(route),
                        })}
                    />
                </Drawer.Navigator>
            </AccountDrawerContext.Provider>
        </NativeDrawer>
    );
}
