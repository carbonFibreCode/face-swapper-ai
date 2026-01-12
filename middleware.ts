import { Session } from "better-auth";
import { betterFetch } from "@better-fetch/fetch";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    const { data: session } = await betterFetch<Session>('/api/auth/get-session', {
        baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        headers: {
            cookie: request.headers.get('cookie') || ''
        }
    });

    //protecting routes
    if (request.nextUrl.pathname.startsWith('/dashboard') && !session) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    if (request.nextUrl.pathname.startsWith("/editor") && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*"],
};

