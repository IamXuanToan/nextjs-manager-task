import ENV from "@/lib/env";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions extends Omit<RequestInit, "body"> {
    method?: HttpMethod;
    body?: unknown;
}

const BASE_URL = ENV.BASE_URL;

function getXsrfToken(): string | null {
    const match = document.cookie.match(new RegExp("(^| )XSRF-TOKEN=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
}

export async function fetchClient<T = unknown>(
    path: string,
    options: FetchOptions = {}
): Promise<T> {
    const url = `${BASE_URL}/${path}`;

    const xsrf = getXsrfToken();

    const res = await fetch(url, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": xsrf || "",
            ...(options.headers || {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: "include",
    });

    if (!res.ok) {
        throw await res.json();
    }

    // console.log(await res.json());

    // Kiểm tra nếu không có body (204 No Content)
    const text = await res.text();
    return text ? JSON.parse(text) : ({} as T);
}
