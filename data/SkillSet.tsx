import { Skill } from "./Skill";

export type SkillSet = {
  name: string;
  skills: Array<Skill>;
};

export const getEmptySkillSet = (): SkillSet => ({
  name: "",
  skills: [],
});
