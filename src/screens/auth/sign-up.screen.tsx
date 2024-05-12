import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";

import { Layout } from "~components/layout/layout.component";
import { Button } from "~components/ui/button.component";
import { FormView } from "~components/ui/forms/form-view.component";
import { Input } from "~components/ui/forms/input.component";
import { Text } from "~components/ui/text.component";
import { TouchableText } from "~components/ui/touchable-text.component";
import { AppRoutes } from "~constants/navigation.constants";
import { VALIDATION_MESSAGES } from "~constants/validation-messages.constants";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";
import { AT_LEAST_ONE_LOWERCASE } from "~utils/validation.utils";

const signUpFormSchema = z
    .object({
        email: z
            .string({
                message: VALIDATION_MESSAGES.INVALID_EMAIL,
                invalid_type_error: VALIDATION_MESSAGES.INVALID_EMAIL,
                required_error: VALIDATION_MESSAGES.REQUIRED,
            })
            .email({
                message: VALIDATION_MESSAGES.INVALID_EMAIL,
            })
            .min(1, {
                message: VALIDATION_MESSAGES.REQUIRED,
            }),

        password: z
            .string({
                message: VALIDATION_MESSAGES.PASSWORD.TOO_SHORT,
                invalid_type_error: VALIDATION_MESSAGES.PASSWORD.TOO_SHORT,
                required_error: VALIDATION_MESSAGES.REQUIRED,
            })
            .min(8, {
                message: VALIDATION_MESSAGES.PASSWORD.TOO_SHORT,
            })
            .regex(AT_LEAST_ONE_LOWERCASE, {
                message: VALIDATION_MESSAGES.PASSWORD.NO_LOWERCASE,
            })
            .regex(/[A-Z]/, {
                message: VALIDATION_MESSAGES.PASSWORD.NO_UPPERCASE,
            })
            .regex(/[0-9]/, { message: VALIDATION_MESSAGES.PASSWORD.NO_NUMBER })
            .regex(/[^A-Za-z0-9]/, {
                message: VALIDATION_MESSAGES.PASSWORD.NO_SPECIAL_CHAR,
            }),

        confirmPassword: z
            .string({
                message: VALIDATION_MESSAGES.PASSWORD.TOO_SHORT,
                invalid_type_error: VALIDATION_MESSAGES.PASSWORD.TOO_SHORT,
                required_error: VALIDATION_MESSAGES.REQUIRED,
            })
            .min(8, {
                message: VALIDATION_MESSAGES.PASSWORD.TOO_SHORT,
            })
            .regex(AT_LEAST_ONE_LOWERCASE, {
                message: VALIDATION_MESSAGES.PASSWORD.NO_LOWERCASE,
            })
            .regex(/[A-Z]/, {
                message: VALIDATION_MESSAGES.PASSWORD.NO_UPPERCASE,
            })
            .regex(/[0-9]/, { message: VALIDATION_MESSAGES.PASSWORD.NO_NUMBER })
            .regex(/[^A-Za-z0-9]/, {
                message: VALIDATION_MESSAGES.PASSWORD.NO_SPECIAL_CHAR,
            }),

        username: z
            .string({
                message: VALIDATION_MESSAGES.INVALID_USERNAME,
                invalid_type_error: VALIDATION_MESSAGES.INVALID_USERNAME,
                required_error: VALIDATION_MESSAGES.REQUIRED,
            })
            .min(1, {
                message: VALIDATION_MESSAGES.REQUIRED,
            }),
    })
    .refine(schema => schema.password === schema.confirmPassword, {
        message: VALIDATION_MESSAGES.PASSWORD.MATCHES_CONFIRMATION,
        path: ["confirmPassword"],
    });

type SignUpFormData = z.infer<typeof signUpFormSchema>;

export function SignUpScreen() {
    const styles = useThemedStyles(themedStyles);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<SignUpFormData>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
        },
        mode: "onTouched",
        resolver: zodResolver(signUpFormSchema),
    });

    const navigation = useNavigation();

    const onSubmit = async (data: SignUpFormData) => {
        console.log(data);
        navigation.navigate(AppRoutes.Main.NAVIGATOR, {
            screen: AppRoutes.Main.Home,
        });
    };

    const handleLoginPress = () => {
        navigation.navigate(AppRoutes.Auth.NAVIGATOR, {
            screen: AppRoutes.Auth.Login,
        });
    };

    return (
        <Layout style={styles.container} header={{ title: "Sign up" }}>
            <Text>
                Sign up text (this is a placeholder, replace it with the actual
                content)
            </Text>

            <FormView style={styles.container}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            label="Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.email?.message}
                            keyboardType="email-address"
                            returnKeyType="next"
                            enterKeyHint="next"
                            placeholder="Enter your email"
                        />
                    )}
                />

                <Controller
                    name="username"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            label="Username"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.username?.message}
                            returnKeyType="next"
                            enterKeyHint="next"
                            placeholder="Enter your username"
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            label="Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.password?.message}
                            returnKeyType="next"
                            enterKeyHint="next"
                            placeholder="Enter your password"
                            secureTextEntry
                            helperText="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
                        />
                    )}
                />

                <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            label="Password Confirmation"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.confirmPassword?.message}
                            returnKeyType="done"
                            enterKeyHint="done"
                            placeholder="Enter your password"
                            secureTextEntry
                            onSubmitEditing={handleSubmit(onSubmit)}
                        />
                    )}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid}>
                        Sign up
                    </Button>

                    <TouchableText onPress={handleLoginPress}>
                        Already have an account?{" "}
                        <Text style={styles.highlightText}>Log in</Text>
                    </TouchableText>
                </View>
            </FormView>
        </Layout>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        gap: theme.SPACE.LARGE,
    },

    highlightText: {
        color: theme.PRIMARY[500],
    },

    buttonContainer: {
        gap: theme.SPACE.SMALL,
        alignItems: "center",
    },
}));
