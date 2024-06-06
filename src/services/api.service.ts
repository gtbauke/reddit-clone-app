import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://10.0.2.2:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export type LoginResponse = {
    jwt: string;
    refresh: string;
};

export type LoginProps = {
    email: string;
    password: string;
};

export async function login(data: LoginProps) {
    const response = await axiosInstance.post<LoginResponse>(
        "/auth/login",
        data,
    );

    return response.data;
}
