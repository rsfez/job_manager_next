import { primaryBlue, white } from "../design/constants/colors";

export type Company = {
  name: string;
  primaryColor: string;
  alternateColor: string;
};

export const getEmptyCompany = (): Company => ({
  name: "",
  primaryColor: primaryBlue,
  alternateColor: white,
});
