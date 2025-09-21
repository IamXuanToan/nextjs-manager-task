import ENV from "@/lib/env";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions extends Omit<RequestInit, "body"> {
    method?: HttpMethod;
    body?: unknown;
}

const BASE_URL = ENV.BASE_URL;

export async function fetchClient<T = unknown>(path: string, options: FetchOptions = {}): Promise<T> {
    const url = `${BASE_URL}/${path}`;

    const res = await fetch(url, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: "include",
    });

    if (!res.ok) {
        throw await res.json();
    }

    return await res.json();
}
