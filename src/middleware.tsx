import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoutes = createRouteMatcher(["/dashboard"]);

const admin = [
  "user_2phVJQdOOzAlUugwoHXUktlkDyu",
  "user_2phWDtfKDyN6NTt418xP9e3VMNL",
];

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoutes(req)) {
    const { userId } = await auth();

    if (userId && !admin.includes(userId)) {
      const url = req.nextUrl.clone();
      url.pathname = "/out";
      return NextResponse.redirect(url);
    }

    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
