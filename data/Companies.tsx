import { Company, getEmptyCompany } from "./Company";

export type Companies = {
  currentCompany: Company;
  previousCompanies: Array<Company>;
};

export const getEmptyCompanies = (): Companies => ({
  currentCompany: getEmptyCompany(),
  previousCompanies: [],
});
