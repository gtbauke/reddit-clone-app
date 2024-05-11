import { useMemo } from "react";

import { useTheme } from "~contexts/theme.context";
import { type ProcessStylesType } from "~styles/themed-style-sheet.styles";

export function useThemedStyle(styles: ProcessStylesType) {
    const { theme } = useTheme();
    const themedStyles = useMemo(() => styles(theme), [styles, theme]);

    return themedStyles;
}
