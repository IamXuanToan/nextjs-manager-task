"use client";

import { Button } from "@/components/ui/button";
import { useTask } from "@/viewmodels/task/useTask";
import { useColumns } from "@/views/task/TaskColums";
import TaskSkeleton from "@/views/task/TaskSkeleton";
import TaskTable from "@/views/task/TaskTable";

export default function TaskView() {
    const { get_all_task } = useTask();

    const columns = useColumns();

    if (get_all_task.isLoading) {
        return <TaskSkeleton />;
    }

    return (
        <div className="space-y-2">
            <h1 className="font-bold text-2xl text-green-500">Danh sách công việc</h1>
            <h6 className="animate-bounce">Yoo - Còn 41 công việc nữa thôi nào</h6>
            <div className="flex w-full justify-between mt-5">
                <ul className="flex justify-center space-x-2">
                    <li className="border-2 flex items-center text-sm rounded-sm border-blue-300 bg-blue-50 text-blue-500 px-3">
                        Mới
                    </li>
                    <li className="border-2 flex items-center text-sm rounded-sm border-cyan-300 bg-cyan-50 text-cyan-500 px-3">
                        Đang làm
                    </li>
                    <li className="border-2 flex items-center text-sm rounded-sm border-red-300 bg-red-50 text-red-500 px-3">
                        Chưa hoàn thành
                    </li>
                    <li className="border-2 flex items-center text-sm rounded-sm border-green-300 bg-green-50 text-green-500 px-3">
                        Đã hoàn thành
                    </li>
                </ul>
                <Button className="hover:cursor-pointer">ADD TASK</Button>
            </div>
            <TaskTable columns={columns} data={get_all_task.data?.data ?? []} />
        </div>
    );
}
