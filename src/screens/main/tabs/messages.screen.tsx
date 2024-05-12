import React from "react";

import { Layout } from "~components/layout/layout.component";
import { Text } from "~components/ui/text.component";

export function MessagesScreen() {
    return (
        <Layout header={{ headerShown: false }}>
            <Text>Messages Screen</Text>
        </Layout>
    );
}
