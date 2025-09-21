import { API_ENDPOINTS } from "@/lib/apiEndpoints";
import { fetchClient } from "@/lib/fetchClient";
import { TaskFormType } from "@/lib/validators/task";
import { Task } from "@/views/task/TaskColums";

export interface ITaskResponse {
    success: boolean;
    message: string;
    status: string | number;
    data?: Task[];
}

export const taskService = {
    get_all: (): Promise<ITaskResponse> => {
        return fetchClient<ITaskResponse>(API_ENDPOINTS.TASK.GET_ALL, {
            method: "GET",
        });
    },

    add: (data: TaskFormType): Promise<ITaskResponse> => {
        return fetchClient<ITaskResponse>(API_ENDPOINTS.TASK.CREATE, {
            method: "POST",
            body: data,
        });
    },

    delete: (id: number | string): Promise<ITaskResponse> => {
        return fetchClient<ITaskResponse>(API_ENDPOINTS.TASK.DELETE(id), {
            method: "DELETE",
        });
    },
};
