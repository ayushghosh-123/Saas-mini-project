import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  "/signin",
  "/signup",
  "/",
  "/home"
])

const isPublicApiRoute = createRouteMatcher([
    "/api/videos"
])

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth();
    const currentUrl = new URL(req.url)
    const isAccesingDashboard = currentUrl.pathname === '/home'
    const isApiRequest =  currentUrl.pathname.startsWith("/api")


    if(userId && isPublicRoute(req) && !isAccesingDashboard){
          return NextResponse.redirect(new URL("/home", req.url))
    }

    // not logged in
    if(!userId){
       if(!isPublicRoute(req)){
        
       }
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}