import { ErrorTask } from "@/models/auth/authService";
import { ITaskResponse, taskService } from "@/models/task/taskService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";



export function useTask() {
    const queryClient = useQueryClient();

    const get_all_task = useQuery<ITaskResponse, ErrorTask>({
        queryKey: ["tasks"], // key cho cache
        queryFn: taskService.get_all, // hàm fetch dữ liệu
        retry: 0,
    });

    const delete_task = useMutation<ITaskResponse, Error, string | number>({
        mutationFn: (id) => taskService.delete(id),
        onSuccess: (res) => {
            toast.success(res.message);
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { get_all_task, delete_task };
}
