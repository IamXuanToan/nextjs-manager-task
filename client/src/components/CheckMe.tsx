"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useMe } from "@/viewmodels/auth/useMe";
import { notFound, redirect, usePathname, useRouter } from "next/navigation";

export default function CheckMe({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const path = usePathname();
    const me = useMe();

    // console.log(path);
    if (me.isPending) {
        return <Skeleton className="h-[20px] w-[100px] rounded-full" />;
    }

    if (me.isError) {
        localStorage.removeItem("user_name");
        if (path === "/task") {
            notFound();
        }
    }

    if (me.isSuccess) {
        if (path === "/login" || path === "/register") {
            redirect("/");
        }
    }

    return children;
}
