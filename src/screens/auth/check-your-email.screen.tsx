import { type RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";

import { Layout } from "~components/layout/layout.component";
import { Button } from "~components/ui/button.component";
import { FormView } from "~components/ui/forms/form-view.component";
import { OtpInput } from "~components/ui/forms/otp-input.component";
import { Text } from "~components/ui/text.component";
import { TouchableText } from "~components/ui/touchable-text.component";
import { type AuthStackParamList } from "~constants/navigation.constants";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";

export function CheckYourEmailScreen() {
    const {
        params: { email },
    } = useRoute<RouteProp<AuthStackParamList, "CheckYourEmail">>();

    const styles = useThemedStyles(themedStyles);
    const [otp, setOtp] = useState("");

    return (
        <Layout style={styles.container}>
            <Text>
                We sent a reset link to <Text bold>{email}</Text> with a 5 digit
                code to reset your password
            </Text>

            <FormView style={styles.formContainer}>
                <OtpInput maxLength={5} value={otp} setValue={setOtp} />

                <View style={styles.buttonContainer}>
                    <Button onPress={() => null} disabled={otp.length !== 5}>
                        Continue
                    </Button>

                    <View style={styles.resendText}>
                        <Text>
                            Didn't receive the email? Check your spam folder or{" "}
                        </Text>
                        <TouchableText
                            onPress={() => null}
                            style={styles.highlightText}>
                            resend the email
                        </TouchableText>
                    </View>
                </View>
            </FormView>
        </Layout>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        gap: theme.SPACE.LARGE,
    },

    formContainer: {
        gap: theme.SPACE.LARGE,
    },

    highlightText: {
        color: theme.PRIMARY[500],
    },

    buttonContainer: {
        gap: theme.SPACE.SMALL,
    },

    resendText: {
        alignItems: "center",
    },
}));
