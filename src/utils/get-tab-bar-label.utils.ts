import { type BottomTabDescriptor } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

export function getTabBarLabel(props: BottomTabDescriptor) {
    if (props.options.tabBarLabel) {
        return props.options.tabBarLabel;
    }

    if (props.options.title) {
        return props.options.title;
    }

    return props.route.name;
}
