'use client';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useDisableOnPending from "@/lib/hooks/useDisableOnPending";
import { RegisterForm, RegisterFormType } from "@/lib/validators/auth";
import { useRegister } from "@/viewmodels/auth/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function FormRegister() {
    const form = useForm<RegisterFormType>({
        resolver: zodResolver(RegisterForm),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        mode: "onChange", //  validate mỗi khi người dùng gõ
        reValidateMode: "onChange",
    });

    const { mutate, isPending } = useRegister();

    const onSubmit = (values: RegisterFormType) => {
        mutate(values);
    };

    //Kiểm tra xem có đang xử lý đăng ký không có sẽ hiện trạng thái loading
    const isDisabled = useDisableOnPending(isPending);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Nhập name" {...field} />
                            </FormControl>
                            <FormMessage className="text-left" />
                        </FormItem>
                    )}
                />
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
                                <Input type="password" placeholder="Nhập password" {...field} />
                            </FormControl>
                            <FormMessage className="text-left" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nhập lại password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Nhập lại password" {...field} />
                            </FormControl>
                            <FormMessage className="text-left" />
                        </FormItem>
                    )}
                />
                <div className="space-x-6">
                    <Link href="/login">
                        <Button className="hover:cursor-pointer hover:bg-red-600 bg-red-500" disabled={isDisabled}>
                            Đăng Nhập
                        </Button>
                    </Link>
                    <Button type="submit" className="hover:cursor-pointer hover:bg-green-600" disabled={isDisabled}>
                        Đăng kí
                    </Button>
                </div>
            </form>
        </Form>
    );
}
