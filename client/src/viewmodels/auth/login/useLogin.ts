import { useMutation } from "@tanstack/react-query";
import { LoginFormType } from "@/lib/validators/auth";
import { authService, ILoginResponse } from "@/models/auth/authService";
import { toast } from "sonner";
// import { cookies } from 'next/headers'

export function useLogin() {
    return useMutation<ILoginResponse, Error, LoginFormType>({
        mutationFn: (data: LoginFormType) => authService.login(data),
        onSuccess: (res) => {
            toast.success(res.message);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
}
