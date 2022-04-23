import { getEmptyRatings, Ratings } from "./Ratings";
import { getEmptyRoles, Roles } from "./Roles";
import { Companies, getEmptyCompanies } from "./Companies";
import { getEmptySkills, Skills } from "./Skills";

export type Person = {
  fullName: string;
  ratings: Ratings;
  roles: Roles;
  companies: Companies;
  skills: Skills;
};

export const getEmptyPerson = (): Person => ({
  fullName: "",
  ratings: getEmptyRatings(),
  roles: getEmptyRoles(),
  companies: getEmptyCompanies(),
  skills: getEmptySkills(),
});
