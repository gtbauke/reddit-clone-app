import React, { createContext, useState } from "react";

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
    // TODO: theme should be stored in AsyncStorage
    // TODO: create useAsyncState hook
    const [theme, setTheme] = useState<ThemeKeys>("dark");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
