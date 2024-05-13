export const AppRoutes = {
    Splash: "Splash",
    Auth: {
        NAVIGATOR: "Auth",
        Login: "Login",
        SignUp: "Sign Up",
        ForgotPassword: "ForgotPassword",
        CheckYourEmail: "CheckYourEmail",
    },
    Main: {
        NAVIGATOR: "Main",
        Account: {
            Profile: "Profile",
            Settings: "Settings",
        },
        Create: "Create",
        Drawer: {
            NAVIGATOR: "Drawer",
            Tabs: {
                NAVIGATOR: "Tabs",
                Home: "Home",
                Communities: "Communities",
                Messages: "Messages",
                Notifications: "Notifications",
            },
        },
    },
} as const;

type NestedNavigator<T extends Record<string, unknown>> = {
    screen: keyof T;
    params?: T[keyof T];
};

export type AuthStackParamList = {
    [AppRoutes.Auth.Login]: undefined;
    [AppRoutes.Auth.SignUp]: undefined;
    [AppRoutes.Auth.ForgotPassword]: undefined;
    [AppRoutes.Auth.CheckYourEmail]: { email: string };
};

export type TabsStackParamList = {
    [AppRoutes.Main.Drawer.Tabs.Home]: undefined;
    [AppRoutes.Main.Drawer.Tabs.Communities]: undefined;
    [AppRoutes.Main.Drawer.Tabs.Messages]: undefined;
    [AppRoutes.Main.Drawer.Tabs.Notifications]: undefined;
};

export type DrawerStackParamList = {
    [AppRoutes.Main.Drawer.Tabs.NAVIGATOR]: NestedNavigator<TabsStackParamList>;
};

export type MainStackParamList = {
    [AppRoutes.Main.Drawer.NAVIGATOR]: NestedNavigator<DrawerStackParamList>;
    [AppRoutes.Main.Account.Profile]: undefined;
    [AppRoutes.Main.Account.Settings]: undefined;
    [AppRoutes.Main.Create]: undefined;
};

export type AppStackParamList = {
    [AppRoutes.Splash]: undefined;
    [AppRoutes.Auth.NAVIGATOR]: NestedNavigator<AuthStackParamList>;
    [AppRoutes.Main.NAVIGATOR]: NestedNavigator<MainStackParamList>;
    [AppRoutes.Main.Drawer.Tabs.NAVIGATOR]: NestedNavigator<TabsStackParamList>;
};
