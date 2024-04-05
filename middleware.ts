import { authMiddleware } from "@clerk/nextjs";
 
// Voir https://clerk.com/docs/references/nextjs/auth-middleware
// Pour plus d'informations sur la configuration de votre Middleware.
export default authMiddleware({
  // Autoriser les utilisateurs déconnectés à accéder aux routes spécifiées.
  // publicRoutes: ['/tout-le-monde-peut-visiter-cette-route'],
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