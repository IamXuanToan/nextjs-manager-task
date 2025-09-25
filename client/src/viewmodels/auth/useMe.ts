import { authService, IResponse } from "@/models/auth/authService";
import { useQuery } from "@tanstack/react-query";

export function useMe() {
    return useQuery<IResponse, Error>({
        queryKey: ["me"], // key để react-query cache
        queryFn: () => authService.me(),
        retry: false, // tránh lặp lại khi 401
        refetchOnWindowFocus: false,
    });
}
