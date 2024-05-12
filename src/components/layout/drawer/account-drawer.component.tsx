import React from "react";
import { type TextStyle, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { Text } from "~components/ui/text.component";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";
import { useAccountDrawer } from "~contexts/drawer.context";

import { AccountDrawerItem } from "./account-drawer-item.component";
import { AppRoutes } from "../../../constants/navigation.constants";

function ProfileIcon({ style }: { style: TextStyle }) {
    return <FeatherIcon name="user" size={20} style={style} />;
}

function SettingsIcon({ style }: { style: TextStyle }) {
    return <FeatherIcon name="settings" size={20} style={style} />;
}

export function AccountDrawerContent() {
    const styles = useThemedStyles(themedStyles);
    const navigation = useNavigation();
    const { close } = useAccountDrawer();

    const handleOnProfilePress = () => {
        navigation.navigate(AppRoutes.Main.NAVIGATOR, {
            screen: AppRoutes.Main.Account.Profile,
        });

        close();
    };

    return (
        <View style={styles.container}>
            <View style={styles.paddedContainer}>
                <Text>Account Drawer Content testing</Text>
            </View>

            <View style={styles.itemsContainer}>
                <AccountDrawerItem
                    onPress={handleOnProfilePress}
                    renderIcon={ProfileIcon}
                    label="Profile"
                />

                <AccountDrawerItem
                    onPress={() => null}
                    renderIcon={SettingsIcon}
                    label="Settings"
                />
            </View>
        </View>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        paddingVertical: theme.SPACE.LARGE,
        gap: theme.SPACE.XLARGE,
    },

    paddedContainer: {
        paddingHorizontal: theme.SPACE.LARGE,
    },

    itemsContainer: {
        gap: theme.SPACE.SMALL,
    },
}));
