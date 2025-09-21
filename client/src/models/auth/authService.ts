import { API_ENDPOINTS } from "@/lib/apiEndpoints";
import { fetchClient } from "@/lib/fetchClient";
import { LoginFormType, RegisterFormType } from "@/lib/validators/auth";

export interface IRegisterResponse {
    success: boolean;
    message: string;
    status: string | number;
}

type UserResponse = {
    id: string,
    name: string;
}

export interface ILoginResponse {
    success: boolean;
    message: string;
    status: string | number;
    token?: string | undefined;
    user?: UserResponse,
}

export const authService = {
    register: (data: RegisterFormType): Promise<IRegisterResponse> => {
        return fetchClient<IRegisterResponse>(API_ENDPOINTS.USER.CREATE, {
            method: "POST",
            body: data,
        });
    },

    login: (data: LoginFormType): Promise<ILoginResponse> => {
        return fetchClient<IRegisterResponse>(API_ENDPOINTS.AUTH.LOGIN, {
            method: "POST",
            body: data,
        });
    },
};
