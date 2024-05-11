import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { useColorScheme } from "react-native";

import { DARK_THEME, LIGHT_THEME, type Theme } from "~styles/theme.styles";

import { useAsyncState } from "../hooks/use-async-state.hook";

export type ThemeKeys = "light" | "dark";

export type ThemeContextProps = {
    theme: Theme;
    themeKey: ThemeKeys;
    setTheme: (themeKey: ThemeKeys) => void;
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
    const [themeKey, setThemeKey] = useAsyncState<ThemeKeys>({
        key: "theme",
        initialValue: systemTheme === "dark" ? "dark" : "light",
        options: { shouldOverride: true },
    });

    const [themeObject, setThemeObject] = useState<Theme>(() => {
        return themeKey === "dark" ? DARK_THEME : LIGHT_THEME;
    });

    const toggleTheme = useCallback(() => {
        setThemeKey(prev => (prev === "dark" ? "light" : "dark"));
    }, [setThemeKey]);

    useEffect(() => {
        setThemeObject(themeKey === "dark" ? DARK_THEME : LIGHT_THEME);
    }, [themeKey]);

    return (
        <ThemeContext.Provider
            value={{
                theme: themeObject,
                themeKey,
                setTheme: setThemeKey,
                toggleTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
