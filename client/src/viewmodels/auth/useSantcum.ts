"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/models/auth/authService";

export function useSantcum() {
    return useMutation({
        mutationFn: () => authService.sanctum(),
    });
}
