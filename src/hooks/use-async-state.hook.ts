import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

type InitialValue<T> = T | (() => T);

type UseAsyncStateOptions = {
    shouldOverride?: boolean;
};

type UseAsyncStateProps<T> = {
    key: string;
    initialValue: InitialValue<T>;
    options?: UseAsyncStateOptions;
};

export function useAsyncState<T>(props: UseAsyncStateProps<T>) {
    const options = props.options || { shouldOverride: false };
    const [state, setState] = useState<T>(props.initialValue);

    useEffect(() => {
        const getInitialValue = async () => {
            if (options.shouldOverride) {
                return props.initialValue;
            }

            const value = await AsyncStorage.getItem(props.key);
            if (!value) {
                return props.initialValue;
            }

            return JSON.parse(value) as T;
        };

        getInitialValue().then(setState);
    }, [options.shouldOverride, props.initialValue, props.key]);

    const updateState = async (value: T) => {
        setState(value);
        await AsyncStorage.setItem(props.key, JSON.stringify(value));
    };

    return [state, updateState] as const;
}
