import { getEmptyRole, Role } from "./Role";

export type Roles = {
  currentRole: Role;
  other: Array<Role>;
};

export const getEmptyRoles = (): Roles => ({
  currentRole: getEmptyRole(),
  other: [],
});
