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
        Tabs: {
            NAVIGATOR: "Tabs",
            Home: "Home",
            Communities: "Communities",
            Create: "Create",
            Messages: "Messages",
            Notifications: "Notifications",
            Account: {
                NAVIGATOR: "Account",
                Profile: "Profile",
                Settings: "Settings",
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

export type AccountStackParamList = {
    [AppRoutes.Main.Tabs.Account.Profile]: undefined;
    [AppRoutes.Main.Tabs.Account.Settings]: undefined;
};

export type TabsStackParamList = {
    [AppRoutes.Main.Tabs.Home]: undefined;
    [AppRoutes.Main.Tabs.Communities]: undefined;
    [AppRoutes.Main.Tabs.Create]: undefined;
    [AppRoutes.Main.Tabs.Messages]: undefined;
    [AppRoutes.Main.Tabs.Notifications]: undefined;
    [AppRoutes.Main.Tabs.Account
        .NAVIGATOR]: NestedNavigator<AccountStackParamList>;
};

export type MainStackParamList = {
    [AppRoutes.Main.Tabs.NAVIGATOR]: NestedNavigator<TabsStackParamList>;
};

export type AppStackParamList = {
    [AppRoutes.Splash]: undefined;
    [AppRoutes.Auth.NAVIGATOR]: NestedNavigator<AuthStackParamList>;
    [AppRoutes.Main.NAVIGATOR]: NestedNavigator<MainStackParamList>;
};
