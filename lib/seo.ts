// lib/seo.ts

export function routeToTitle(route: string) {
  return route
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}