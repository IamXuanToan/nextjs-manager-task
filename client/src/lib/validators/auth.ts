import * as z from "zod";

export const RegisterForm = z
    .object({
        name: z.string().min(3, "Họ tên được nhỏ hơn 3 kí tự").max(50, "Họ tên không được quá 50 kí tự"),
        email: z.email("Email không hợp lệ"),
        password: z.string("Vui lòng nhập password").min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(100, "Mật khẩu không được vượt quá 100 ký tự"),
        confirmPassword: z.string("Vui lòng nhập lại password").min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(100, "Mật khẩu không được vượt quá 100 ký tự"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu không trùng nhau",
        path: ["confirmPassword"], // path of error
    });

export type RegisterFormType = z.TypeOf<typeof RegisterForm>;

export const LoginForm = z.object({
    email: z.email("Email không hợp lệ"),
    password: z.string("Vui lòng nhập password").min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(100, "Mật khẩu không được vượt quá 100 ký tự"),
});

export type LoginFormType = z.TypeOf<typeof LoginForm>;
