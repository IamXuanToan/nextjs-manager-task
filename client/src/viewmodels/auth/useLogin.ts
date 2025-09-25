"use client";

import { useMutation } from "@tanstack/react-query";
import { LoginFormType } from "@/lib/validators/auth";
import { authService, ILoginResponse } from "@/models/auth/authService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useLogin() {
    const router = useRouter();

    return useMutation<ILoginResponse, Error, LoginFormType>({
        mutationFn: (data: LoginFormType) => {
            return authService.login(data);
        },
        onSuccess: (res) => {
            toast.success(res.message);
            if (res.user?.name) {
                localStorage.setItem("user_name", res.user?.name);
            }
            router.push("/");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
}
