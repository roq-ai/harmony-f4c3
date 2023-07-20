const mapping: Record<string, string> = {
  accounts: 'account',
  appointments: 'appointment',
  inventories: 'inventory',
  organizations: 'organization',
  reports: 'report',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
