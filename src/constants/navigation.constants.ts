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

export type MainStackParamList = {
    [AppRoutes.Main.Home]: undefined;
};

export type AppStackParamList = {
    [AppRoutes.Splash]: undefined;
    [AppRoutes.Auth.NAVIGATOR]: NestedNavigator<AuthStackParamList>;
    [AppRoutes.Main.NAVIGATOR]: NestedNavigator<MainStackParamList>;
};
