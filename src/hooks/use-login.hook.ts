import { useMutation, useQueryClient } from "react-query";

import { QueryKeys } from "~constants/queries-keys.constants";
import { login } from "~services/api.service";

export function useLogin() {
    const queryClient = useQueryClient();
    const mutation = useMutation(login, {
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKeys.Auth);
        },
    });

    return mutation;
}
