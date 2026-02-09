import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const path = nextUrl.pathname;

  const isAuthRoute =
    path.startsWith("/sign-in") ||
    path.startsWith("/sign-up") ||
    path.startsWith("/sign-out");

  const isAppRoute = path.startsWith("/app");
  
  // Only /api/app/* routes are protected by default
  const isProtectedApiRoute = path.startsWith("/api/app");

  // Only check session if we are on a protected route or auth page (to redirect logged in users)
  // This avoids DB calls on public pages (landing, about, etc)
  let isAuth = false;
  if (isAppRoute || isAuthRoute || isProtectedApiRoute) {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    isAuth = !!session;
  }

  // 1. Redirect to /app if logged in and trying to access auth pages (sign-in, sign-up)
  if (isAuthRoute && isAuth && !path.startsWith("/sign-out")) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  // 2. Protect /app routes
  if (isAppRoute && !isAuth) {
    const callbackUrl = encodeURIComponent(path + nextUrl.search);
    return NextResponse.redirect(
      new URL(`/sign-in?callbackUrl=${callbackUrl}`, request.url)
    );
  }

  // 3. Protect /api/app routes
  if (isProtectedApiRoute && !isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/app/:path*",
    "/sign-in",
    "/sign-up",
    "/sign-out",
    "/api/:path*",
  ],
};
