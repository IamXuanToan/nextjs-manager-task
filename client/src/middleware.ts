import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


//=========================
// Middleware ở server next
//=========================

// Middleware chạy cho mọi request
export function middleware(request: NextRequest) {

    // const token = request.cookies.get("auth_token")?.value;



    // Nếu không có token và đang vào trang cần login
    // if (!token && request.nextUrl.pathname.startsWith("/task")) {
    //     const loginUrl = new URL("/login", request.url);
    //     return NextResponse.redirect(loginUrl);
    // }
        
    // if (!token && request.nextUrl.pathname.startsWith("/task")) {
    //     const loginUrl = new URL("/login", request.url);
    //     return NextResponse.redirect(loginUrl);
    // }

    // if (
    //     token &&
    //     (request.nextUrl.pathname.startsWith("/login") ||
    //         request.nextUrl.pathname.startsWith("/register"))
    // ) {
    //     const homeUrl = new URL("/", request.url);
    //     return NextResponse.redirect(homeUrl);
    // }

    // Cho phép request đi tiếp
    return NextResponse.next();
}

// Chỉ áp dụng cho các path nhất định
export const config = {
    matcher: ["/task/:path*", "/login", "/register"],
};
