import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService, IResponse } from "@/models/auth/authService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { cookies } from 'next/headers'

export function useLogout() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<IResponse, Error>({
        mutationFn: () => authService.logout(),
        onSuccess: (res) => {
            toast.success(res.message);
            localStorage.removeItem("user_name");
            queryClient.invalidateQueries({ queryKey: ["me"] });
            router.push("/");
        },
        onError: (err) => {
            toast.error(err.message);
            router.push("/404");
        },
    });
}
