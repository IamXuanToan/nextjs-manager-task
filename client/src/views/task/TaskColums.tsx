"use client";

import AlertConfirm from "@/components/AlertConfirm";
import { useTask } from "@/viewmodels/task/useTask";
import TaskStatus from "@/views/task/TaskStatus";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";

export type Task = {
    id: string | number;
    title: string;
    start_date: string;
    due_date: string;
    status: "new" | "inProgress" | "completed";
    estimated_time: string;
    percent_done: string;
};

export function useColumns(): ColumnDef<Task>[] {
    const { delete_task } = useTask();

    return [
        {
            accessorKey: "title",
            header: "Tiêu đề",
        },
        {
            accessorKey: "start_date",
            header: "Ngày bắt đầu",
        },
        {
            accessorKey: "due_date",
            header: "Ngày kết thúc",
        },
        {
            accessorKey: "status",
            header: "Trạng thái",
             cell: ({ row }) => <TaskStatus status={row.original.status} />,
        },
        {
            accessorKey: "estimated_time",
            header: "Thời gian dự kiến",
        },
        {
            accessorKey: "percent_done",
            header: "% hoàn thành",
        },

        {
            accessorKey: "actions",
            header: "Hành động",
            cell: ({ row }) => {
                const task = row.original; // Lấy ra dữ liệu gốc của row
                return (
                    <AlertConfirm
                        title="Bạn có chắc chắn muốn xóa không?"
                        description="Thao tác này không thể hoàn tác. Công việc sẽ bị xóa vĩnh viễn."
                        icon={<Trash />}
                        onConfirm={() => delete_task.mutate(task.id)}
                    />
                );
            },
        },
    ];
}
