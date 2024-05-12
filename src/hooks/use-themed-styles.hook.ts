import { useTheme } from "~contexts/theme.context";
import {
    type CreateThemedStylesBuilder,
    type StyleSheetType,
} from "~styles/theme.styles";

export function useThemedStyles<T extends StyleSheetType>(
    styles: CreateThemedStylesBuilder<T>,
): T {
    const { theme } = useTheme();
    const themedStyles = styles(theme);

    return themedStyles;
}
