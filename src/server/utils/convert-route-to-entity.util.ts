const mapping: Record<string, string> = {
  artworks: 'artwork',
  blogs: 'blog',
  galleries: 'gallery',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
