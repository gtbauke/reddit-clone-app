import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Layout } from "~components/layout/layout.component";
import { Button } from "~components/ui/button.component";
import { FormView } from "~components/ui/forms/form-view.component";
import { Input } from "~components/ui/forms/input.component";
import { Text } from "~components/ui/text.component";
import { AppRoutes } from "~constants/navigation.constants";
import { useTheme } from "~contexts/theme.context";
import { createThemedStyles } from "~styles/theme.styles";

const forgotPasswordSchema = z.object({
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
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordScreen() {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<ForgotPasswordFormData>({
        defaultValues: {
            email: "",
        },
        mode: "onTouched",
        resolver: zodResolver(forgotPasswordSchema),
    });

    const navigation = useNavigation();

    const onSubmit = (data: ForgotPasswordFormData) => {
        console.log(data);
        navigation.navigate(AppRoutes.Auth.NAVIGATOR, {
            screen: AppRoutes.Auth.CheckYourEmail,
            params: { email: data.email },
        });
    };

    return (
        <Layout style={styles.container}>
            <Text>Please enter your email to reset the password</Text>

            <FormView style={styles.container}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.email?.message}
                            onSubmitEditing={handleSubmit(onSubmit)}
                        />
                    )}
                />

                <Button disabled={!isValid} onPress={handleSubmit(onSubmit)}>
                    Reset Password
                </Button>
            </FormView>
        </Layout>
    );
}

const getStyles = createThemedStyles(theme => ({
    container: {
        gap: theme.SPACE.LARGE,
    },
}));
