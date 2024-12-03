import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoutes = createRouteMatcher(["/dashboard"]);
const admin = [
  "user_2phVJQdOOzAlUugwoHXUktlkDyu",
  "user_2phWDtfKDyN6NTt418xP9e3VMNL",
];

// Your path-based redirection logic
const handleCustomRedirects = (path: string) => {
  if (path === "/w") {
    return NextResponse.redirect(
      "https://sheet.zoho.com/sheet/open/9oouw20fa000f6516493f8875ae445638b7a4?sheetid=0&range=A1"
    );
  } else if (path === "/z") {
    return NextResponse.redirect(
      "https://zoom.us/j/98221288314?pwd=mygOboxyf8EJ9Vyd1kerkiaE90oQgv.1"
    );
  } else if (path === "/t") {
    return NextResponse.redirect(
      "https://trello.com/b/NAjEc9yC/saidur-consulting"
    );
  } else if (path === "/j") {
    return NextResponse.redirect("https://web.jibble.io/dashboard");
  } else if (path === "/f") {
    return NextResponse.redirect(
      "https://sheet.zoho.com/sheet/open/p3jvyff1ad966264e49a392ba953fc4105b37?sheetid=4&range=E19"
    );
  } else if (path === "/l") {
    return NextResponse.redirect(
      "https://sheet.zoho.com/sheet/open/9ukx18da62e873c8a404a95d766ac4bc54ce3?sheetid=0&range=G4"
    );
  }

  return null; // No redirect
};

// Unified middleware function
export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  // Handle custom redirects first
  const redirectResponse = handleCustomRedirects(pathname);
  if (redirectResponse) {
    return redirectResponse;
  }

  // Handle protected routes using Clerk
  if (isProtectedRoutes(req)) {
    const { userId } = await auth();

    if (userId && !admin.includes(userId)) {
      const url = req.nextUrl.clone();
      url.pathname = "/out";
      return NextResponse.redirect(url);
    }

    await auth.protect();
  }

  return NextResponse.next(); // Proceed to the next middleware or route
});

// Unified matcher configuration
export const config = {
  matcher: [
    "/",
    "/w",
    "/z",
    "/t",
    "/j",
    "/f",
    "/l",
    "/dashboard",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
