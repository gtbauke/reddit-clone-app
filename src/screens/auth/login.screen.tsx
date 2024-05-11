import React from "react";
import { Button, Text, View } from "react-native";

import { Layout } from "~components/layout/layout.component";
import { Input } from "~components/ui/forms/input.component";
import { useTheme } from "~contexts/theme.context";
import { createThemedStyles } from "~styles/theme.styles";

export function LoginScreen() {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    return (
        <Layout style={styles.container}>
            <Text>
                Please enter your email address or username and password to log
                in to your app.
            </Text>

            <View style={styles.inputContainer}>
                <Input label="Email or username" />

                <View style={styles.passwordContainer}>
                    <Input label="Password" />

                    <Text style={styles.forgotPasswordText}>
                        Forgot password?
                    </Text>
                </View>

                <View>
                    <Button title="Log in" onPress={() => null} />
                    <Text>
                        Don't have an account? <Text>Sign up</Text>
                    </Text>
                </View>
            </View>
        </Layout>
    );
}

const getStyles = createThemedStyles(theme => ({
    container: {
        gap: theme.SPACE.LARGE,
    },

    inputContainer: {
        gap: theme.SPACE.LARGE,
    },

    passwordContainer: {
        gap: theme.SPACE.SMALL,
    },

    forgotPasswordText: {
        alignSelf: "flex-end",
    },
}));
