import React from "react";

import { Layout } from "~components/layout/layout.component";
import { FormView } from "~components/ui/forms/form-view.component";
import { Text } from "~components/ui/text.component";
import { useThemedStyles } from "~hooks/use-themed-styles.hook";
import { createThemedStyles } from "~styles/theme.styles";

export function SignUpScreen() {
    const styles = useThemedStyles(themedStyles);

    return (
        <Layout style={styles.container} header={{ title: "Sign up" }}>
            <Text>
                Sign up text (this is a placeholder, replace it with the actual
                content)
            </Text>

            <FormView style={styles.container}>
                <Text>Form goes here</Text>
            </FormView>
        </Layout>
    );
}

const themedStyles = createThemedStyles(theme => ({
    container: {
        gap: theme.SPACE.LARGE,
    },
}));
