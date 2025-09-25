"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useLogout } from "@/viewmodels/auth/useLogout";
import { useMe } from "@/viewmodels/auth/useMe";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
    
    const me = useMe();
    const logout = useLogout();
    
    if (me.isPending || me.isLoading || logout.isPending || me.isFetching || me.isRefetching) {
        return <Skeleton className="h-[20px] w-[100px] rounded-full" />;
    }

    const isLogin = me.isSuccess && me.data?.success;
    const name = isLogin ? localStorage.getItem("user_name") : null;

    return (
        <div>
            <h1 className="text-center mb-3">
                Chào mừng <span className=" font-bold">{name || "khách"}</span>
            </h1>
            <div className="space-x-5">
                {isLogin ? (
                    <>
                        <Link href={"/task"} className="hover:text-red-500">
                            Vào Task
                        </Link>
                        <Button variant={"destructive"} onClick={()=>logout.mutate()}>
                            Đăng xuất
                        </Button>
                    </>
                ) : (
                    <>
                        <Link href={"/login"} className="hover:text-red-500">
                            Vào login
                        </Link>
                        <Link href={"/register"} className="hover:text-red-500">
                            Vào đăng ký
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
