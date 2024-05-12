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
        Profile: "Profile",
        Settings: "Settings",
        Tabs: {
            NAVIGATOR: "Tabs",
            Home: "Home",
            Communities: "Communities",
            Messages: "Messages",
            Notifications: "Notifications",
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
    [AppRoutes.Main.Tabs.Home]: undefined;
    [AppRoutes.Main.Tabs.Communities]: undefined;
    [AppRoutes.Main.Tabs.Messages]: undefined;
    [AppRoutes.Main.Tabs.Notifications]: undefined;
};

export type MainStackParamList = {
    [AppRoutes.Main.Tabs.NAVIGATOR]: NestedNavigator<TabsStackParamList>;
    [AppRoutes.Main.Profile]: undefined;
    [AppRoutes.Main.Settings]: undefined;
};

export type AppStackParamList = {
    [AppRoutes.Splash]: undefined;
    [AppRoutes.Auth.NAVIGATOR]: NestedNavigator<AuthStackParamList>;
    [AppRoutes.Main.NAVIGATOR]: NestedNavigator<MainStackParamList>;
};
