import { getEmptySkillSet, SkillSet } from "./SkillSet";

export type Role = {
  name: string;
  rating: number;
  specificSkills: SkillSet;
  importantSkills: SkillSet;
  crucialSkills: SkillSet;
};

export const getEmptyRole = (): Role => ({
  name: "",
  rating: 0.0,
  specificSkills: getEmptySkillSet(),
  importantSkills: getEmptySkillSet(),
  crucialSkills: getEmptySkillSet(),
});
