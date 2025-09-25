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
        LOGIN: "api/auth/login",
        LOGOUT: "api/auth/logout",
        ME: "api/auth/me",
        SANCTUM: "sanctum/csrf-cookie",
    },

    TASK: createResourceEndpoints("api/task"),
    USER: createResourceEndpoints("api/user"),
};
