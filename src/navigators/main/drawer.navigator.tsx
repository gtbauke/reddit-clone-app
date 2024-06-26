import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useMemo, useState } from "react";
import { Drawer as NativeDrawer } from "react-native-drawer-layout";

import {
    AppRoutes,
    type DrawerStackParamList,
} from "~constants/navigation.constants";
import { DrawerHeader } from "~components/layout/drawer/drawer-header.component";
import {
    getHeaderTitleStyles,
    getTabHeaderTitle,
} from "~utils/get-header-title.utils";
import { useTheme } from "~contexts/theme.context";
import { AccountDrawerContext } from "~contexts/drawer.context";
import { AccountDrawerContent } from "~components/layout/drawer/account-drawer.component";
import { GroupsDrawerContent } from "~components/layout/drawer/groups-drawer.component";

import { TabsNavigator } from "./tabs.navigator";

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export function DrawerNavigator() {
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
        <AccountDrawerContext.Provider value={value}>
            <NativeDrawer
                open={isRightDrawerOpen}
                onOpen={() => setIsRightDrawerOpen(true)}
                onClose={() => setIsRightDrawerOpen(false)}
                drawerPosition="right"
                renderDrawerContent={AccountDrawerContent}>
                <Drawer.Navigator
                    screenOptions={{
                        header: DrawerHeader,
                        headerStyle: { backgroundColor: theme.BACKGROUND },
                        drawerStyle: { backgroundColor: theme.BACKGROUND },
                    }}
                    drawerContent={GroupsDrawerContent}>
                    <Drawer.Screen
                        name={AppRoutes.Main.Drawer.Tabs.NAVIGATOR}
                        component={TabsNavigator}
                        options={({ route }) => ({
                            drawerItemStyle: { display: "none" },
                            headerTitle: getTabHeaderTitle(route),
                            headerTitleStyle: getHeaderTitleStyles(route),
                        })}
                    />
                </Drawer.Navigator>
            </NativeDrawer>
        </AccountDrawerContext.Provider>
    );
}
