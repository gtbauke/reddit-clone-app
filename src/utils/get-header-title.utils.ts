import {
    type RouteProp,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { type TextStyle } from "react-native";

import { type MainStackParamList } from "~constants/navigation.constants";

export function getTabHeaderTitle(
    route: RouteProp<MainStackParamList, "Tabs">,
) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    return routeName;
}

export function getHeaderTitleStyles(
    route: RouteProp<MainStackParamList, "Tabs">,
): TextStyle {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    if (routeName === "Home") {
        return { display: "none" };
    }

    return {};
}
