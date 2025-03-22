import { authMiddleware } from "@clerk/nextjs";

// This middleware protects all routes including api/trpc routes
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/webhook/clerk"],
});

export const config = {
  // Matcher ignoring _next and static files
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 