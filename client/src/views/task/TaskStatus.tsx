"use client";

import { Badge } from "@/components/ui/badge";

type TaskStatusProps = {
    status: "new" | "inProgress" | "completed";
};

export default function TaskStatus({ status }: TaskStatusProps) {
    //Record<K, T> là utility type của TypeScript.
    //Nó tạo ra một object type với key kiểu K và value kiểu T.

    //Key: "new" | "inProgress" | "failed" | "completed".
    // Value: string.

    //Nghĩa là map phải có đủ 4 key tương ứng (new, inProgress, failed, completed) và mỗi value phải là string.
    const map: Record<TaskStatusProps["status"], string> = {
        new: "border-blue-300 bg-blue-50 text-blue-500",
        inProgress: "border-cyan-300 bg-cyan-50 text-cyan-500",
        completed: "border-green-300 bg-green-50 text-green-500",
    };
    const label: Record<TaskStatusProps["status"], string> = {
        new: "Mới",
        inProgress: "Đang làm",
        completed: "Hoàn thành",
    };

    return <Badge className={map[status]}>{label[status]}</Badge>;
}
