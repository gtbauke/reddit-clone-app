import React from "react";
import { View } from "react-native";

import { Layout } from "~components/layout/layout.component";
import { Button } from "~components/ui/button.component";
import { Input } from "~components/ui/forms/input.component";
import { Text } from "~components/ui/text.component";
import { TouchableText } from "~components/ui/touchable-text.component";
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

                    <TouchableText
                        onPress={() => null}
                        style={styles.forgotPasswordText}
                        notImportant>
                        Forgot password?
                    </TouchableText>
                </View>

                <View style={styles.buttonContainer}>
                    <Button onPress={() => null}>Log in</Button>
                    <TouchableText onPress={() => null} notImportant>
                        Don't have an account?{" "}
                        <Text style={styles.highlightedText}>Sign up</Text>
                    </TouchableText>
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

    buttonContainer: {
        gap: theme.SPACE.SMALL,
        alignItems: "center",
    },

    highlightedText: {
        color: theme.PRIMARY[500],
    },
}));
