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
    [AppRoutes.Main.Account.Profile]: undefined;
    [AppRoutes.Main.Account.Settings]: undefined;
};

export type MainStackParamList = {
    [AppRoutes.Main.Home]: undefined;
    [AppRoutes.Main.Communities]: undefined;
    [AppRoutes.Main.Create]: undefined;
    [AppRoutes.Main.Messages]: undefined;
    [AppRoutes.Main.Notifications]: undefined;
    [AppRoutes.Main.Account.NAVIGATOR]: NestedNavigator<AccountStackParamList>;
};

export type AppStackParamList = {
    [AppRoutes.Splash]: undefined;
    [AppRoutes.Auth.NAVIGATOR]: NestedNavigator<AuthStackParamList>;
    [AppRoutes.Main.NAVIGATOR]: NestedNavigator<MainStackParamList>;
};
