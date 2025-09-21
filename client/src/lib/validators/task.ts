import * as z from "zod";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const TaskForm = z
    .object({
        title: z.string().min(3, "title được nhỏ hơn 3 kí tự!"),
        start_date: z.date().min(today, "Ngày phải lớn hơn hoặc bằng hôm nay!"),
        due_date: z.date().min(today, "Ngày phải lớn hơn hoặc bằng hôm nay!"),
        status: z.enum(
            ["new", "inProgress", "completed"],
            "Trạng thái phải 1 trong 3 trạng thái 'new', 'inProgress', 'completed'!"
        ),
        description: z.string().nullable(),
        estimated_time: z
            .number()
            .int()
            .min(0, "Thời gian ước tính phải là số nguyên và lớn hơn 0!"),
        percent_done: z.number().int().min(0, "Phần trăm hoàn thành phải lớn hơn 0!"),
    })
    .refine((data) => data.due_date >= data.start_date, {
        message: "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu",
        path: ["due_date"], // gắn lỗi vào field due_date
    });

export type TaskFormType = z.TypeOf<typeof TaskForm>;
