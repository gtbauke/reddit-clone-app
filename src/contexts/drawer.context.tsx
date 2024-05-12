import { createContext, useContext } from "react";

export type AccountDrawerContextProps = {
    open: () => void;
    close: () => void;
    toggle: () => void;
};

export const AccountDrawerContext = createContext<AccountDrawerContextProps>(
    {} as AccountDrawerContextProps,
);

export function useAccountDrawer() {
    return useContext(AccountDrawerContext);
}
