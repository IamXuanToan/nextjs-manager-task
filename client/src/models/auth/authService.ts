import { API_ENDPOINTS } from "@/lib/apiEndpoints";
import { fetchClient } from "@/lib/fetchClient";
import { LoginFormType, RegisterFormType } from "@/lib/validators/auth";

export interface IResponse {
    success: boolean;
    message: string;
    status: string | number;
}

type UserResponse = {
    id: string;
    name: string;
};

export interface ILoginResponse {
    success: boolean;
    message: string;
    status: string | number;
    token?: string | undefined;
    user?: UserResponse;
}

export type ErrorTask = {
    success: boolean;
    message: string;
};

export const authService = {
    register: (data: RegisterFormType): Promise<IResponse> => {
        return fetchClient<IResponse>(API_ENDPOINTS.USER.CREATE, {
            method: "POST",
            body: data,
        });
    },

    login: (data: LoginFormType): Promise<ILoginResponse> => {
        return fetchClient<ILoginResponse>(API_ENDPOINTS.AUTH.LOGIN, {
            method: "POST",
            body: data,
        });
    },

    logout: (): Promise<IResponse> => {
        return fetchClient<IResponse>(API_ENDPOINTS.AUTH.LOGOUT, {
            method: "POST",
        });
    },

    me: (): Promise<IResponse> => {
        return fetchClient<IResponse>(API_ENDPOINTS.AUTH.ME, {
            method: "GET",
        });
    },

    sanctum: (): Promise<void> => {
        return fetchClient<void>(API_ENDPOINTS.AUTH.SANCTUM, {
            method: "GET",
        });
    },
};
