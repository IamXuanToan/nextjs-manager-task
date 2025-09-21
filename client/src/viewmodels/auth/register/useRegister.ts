import { useMutation } from "@tanstack/react-query";
import { RegisterFormType } from "@/lib/validators/auth";
import { authService, IRegisterResponse } from "@/models/auth/authService";
import { toast } from "sonner";

export function useRegister() {
    return useMutation<IRegisterResponse, Error, RegisterFormType>({
        mutationFn: (data: RegisterFormType) => authService.register(data),
        onSuccess: (res) => {
            toast.success(res.message);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
}
