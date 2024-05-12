import React from "react";

import { Layout } from "~components/layout/layout.component";
import { Text } from "~components/ui/text.component";

export function HomeScreen() {
    return (
        <Layout
            style={{ backgroundColor: "red" }}
            header={{ headerShown: false }}>
            <Text>Home Screen</Text>
        </Layout>
    );
}
