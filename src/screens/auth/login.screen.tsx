import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigation } from "@react-navigation/native";

import { Layout } from "~components/layout/layout.component";
import { Button } from "~components/ui/button.component";
import { Input } from "~components/ui/forms/input.component";
import { Text } from "~components/ui/text.component";
import { TouchableText } from "~components/ui/touchable-text.component";
import { useTheme } from "~contexts/theme.context";
import { createThemedStyles } from "~styles/theme.styles";
import { FormView } from "~components/ui/forms/form-view.component";
import { AppRoutes } from "~constants/navigation.constants";
import { useLogin } from "~hooks/use-login.hook";

const loginSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email is invalid",
        })
        .email({
            message: "Email is invalid",
        })
        .min(1, {
            message: "Email is required",
        }),
    password: z
        .string({
            required_error: "Password is required",
            invalid_type_error: "Password is invalid",
        })
        .min(1, {
            message: "Password is required",
        }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginScreen() {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const login = useLogin();

    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<LoginFormData>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onTouched",
        resolver: zodResolver(loginSchema),
    });

    const navigation = useNavigation();

    const onSubmit = async (data: LoginFormData) => {
        try {
            const result = await login.mutateAsync(data);
            console.log(result);

            navigation.navigate(AppRoutes.Main.NAVIGATOR, {
                screen: AppRoutes.Main.Drawer.NAVIGATOR,
                params: {
                    screen: AppRoutes.Main.Drawer.Tabs.NAVIGATOR,
                    params: {
                        screen: AppRoutes.Main.Drawer.Tabs.Home,
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleForgotPasswordPress = () => {
        navigation.navigate(AppRoutes.Auth.NAVIGATOR, {
            screen: AppRoutes.Auth.ForgotPassword,
        });
    };

    const handleSignUpPress = () => {
        navigation.navigate(AppRoutes.Auth.NAVIGATOR, {
            screen: AppRoutes.Auth.SignUp,
        });
    };

    return (
        <Layout style={styles.container}>
            <Text>
                Please enter your email address or username and password to log
                in to your app.
            </Text>

            <FormView style={styles.inputContainer}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            label="Email or username"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.email?.message}
                            placeholder="Enter your email or username"
                            keyboardType="email-address"
                        />
                    )}
                />

                <View style={styles.passwordContainer}>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <Input
                                label="Password"
                                secureTextEntry
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(onSubmit)}
                                placeholder="Enter your password"
                            />
                        )}
                    />

                    <TouchableText
                        onPress={handleForgotPasswordPress}
                        style={styles.forgotPasswordText}
                        notImportant>
                        Forgot password?
                    </TouchableText>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid || login.isLoading}>
                        Log in
                    </Button>
                    <TouchableText onPress={handleSignUpPress} notImportant>
                        Don't have an account?{" "}
                        <Text style={styles.highlightedText}>Sign up</Text>
                    </TouchableText>
                </View>
            </FormView>
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
