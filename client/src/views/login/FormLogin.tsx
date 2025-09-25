"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useDisableOnPending from "@/lib/hooks/useDisableOnPending";
import { LoginForm, LoginFormType } from "@/lib/validators/auth";
import { useLogin } from "@/viewmodels/auth/useLogin";
import { useSantcum } from "@/viewmodels/auth/useSantcum";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function FormLogin() {
    const form = useForm<LoginFormType>({
        resolver: zodResolver(LoginForm),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange", // validate mỗi khi người dùng gõ
        reValidateMode: "onChange",
    });
    
    const { mutate, isPending } = useLogin();
    const sanctum = useSantcum();

    const onSubmit = (values: LoginFormType) => {
        sanctum.mutate(undefined, {
            onSuccess: () => {
                mutate(values);
                console.log("ok");
            },
            onError: (err) => {
                console.error("CSRF init failed", err);
            },
        });
    };

    const isDisabled = useDisableOnPending(isPending);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Nhập email" {...field} />
                            </FormControl>
                            <FormMessage className="text-left" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Nhập password"
                                    autoComplete="disable-autofill"  
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-left" />
                        </FormItem>
                    )}
                />
                <div className="space-x-6">
                    <Link href="/register">
                        <Button className="hover:cursor-pointer hover:bg-red-600 bg-red-500">
                            Đăng ký
                        </Button>
                    </Link>
                    <Button
                        type="submit"
                        className="hover:cursor-pointer hover:bg-green-600"
                        disabled={isDisabled}>
                        Đăng nhập
                    </Button>
                </div>
            </form>
        </Form>
    );
}
