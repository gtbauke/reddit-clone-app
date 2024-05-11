import React, { createContext, useCallback, useContext } from "react";
import { useColorScheme } from "react-native";

import { useAsyncState } from "../hooks/use-async-state.hook";

export type ThemeKeys = "light" | "dark";

export type ThemeContextProps = {
    theme: ThemeKeys;
    setTheme: (theme: ThemeKeys) => void;
    toggleTheme: () => void;
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

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    }, [setTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
