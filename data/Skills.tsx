import { getEmptySkillSet, SkillSet } from "./SkillSet";

export type Skills = {
  firstSet: SkillSet;
  secondSet: SkillSet;
  miscSet: SkillSet;
};

export const getEmptySkills = (): Skills => ({
  firstSet: getEmptySkillSet(),
  secondSet: getEmptySkillSet(),
  miscSet: getEmptySkillSet(),
});
