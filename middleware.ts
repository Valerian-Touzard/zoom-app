import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/recordings',
  '/personal-room',
  '/meeting(.*)',
])

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});
 
export const config = {
  matcher: [
    // Exclure les fichiers avec un "." suivi d'une extension, qui sont généralement des fichiers statiques.
    // Exclure les fichiers dans le répertoire _next, qui sont des fichiers internes de Next.js.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Réinclure tout fichier dans les dossiers api ou trpc qui pourrait avoir une extension.
    "/(api|trpc)(.*)"
  ]
};