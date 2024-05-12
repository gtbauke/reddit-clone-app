import { type RouteProp, useRoute } from "@react-navigation/native";
import React from "react";

import { Layout } from "~components/layout/layout.component";
import { Text } from "~components/ui/text.component";
import { type AuthStackParamList } from "~constants/navigation.constants";

export function CheckYourEmailScreen() {
    const {
        params: { email },
    } = useRoute<RouteProp<AuthStackParamList, "CheckYourEmail">>();

    return (
        <Layout header={{ title: "Check your email" }}>
            <Text>
                We sent a reset link to <Text bold>{email}</Text> with a 5 digit
                code to reset your password
            </Text>
        </Layout>
    );
}
