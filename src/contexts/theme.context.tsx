import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

import { useAsyncState } from "../hooks/use-async-state.hook";

export type ThemeKeys = "light" | "dark";

export type ThemeContextProps = {
    theme: ThemeKeys;
    setTheme: (theme: ThemeKeys) => void;
};

export const ThemeContext = createContext<ThemeContextProps>(
    {} as ThemeContextProps,
);

type ThemeProviderProps = {
    children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useAsyncState<ThemeKeys>({
        key: "theme",
        initialValue: systemTheme === "dark" ? "dark" : "light",
        options: { shouldOverride: true },
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
