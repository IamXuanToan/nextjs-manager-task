export function createResourceEndpoints(resource: string) {
    return {
        GET_ALL: `${resource}`,
        GET: (id: number | string) => `${resource}/${id}`,
        CREATE: `${resource}`,
        UPDATE: (id: number | string) => `${resource}/${id}`,
        DELETE: (id: number | string) => `${resource}/${id}`,
    };
}

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "auth/login",
    },

    TASK: createResourceEndpoints("task"),
    USER: createResourceEndpoints("user"),
};
