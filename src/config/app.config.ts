interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Clinic Owner'],
  customerRoles: ['Patient'],
  tenantRoles: ['Clinic Owner', 'Clinic Manager', 'Doctor', 'Receptionist', 'Accountant'],
  tenantName: 'Organization',
  applicationName: 'Harmony',
  addOns: ['chat', 'notifications', 'file'],
};
