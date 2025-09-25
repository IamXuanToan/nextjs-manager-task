"use server";
import { cookies } from "next/headers";

export async function setCookie(name: string, value: string) {
    const cookieStore = await cookies();
    return cookieStore.set(name, value);
}

export async function getCookie(name: string) {
    const cookieStore = await cookies();
    // console.log(cookieStore.get(name)?.value);
    
    return cookieStore.get(name)?.value;
}
