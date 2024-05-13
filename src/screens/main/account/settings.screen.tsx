import React from "react";

import { Layout } from "~components/layout/layout.component";
import { Text } from "~components/ui/text.component";

export function SettingsScreen() {
    return (
        <Layout header={{ headerShown: false }}>
            <Text>Settings Screen</Text>
        </Layout>
    );
}
