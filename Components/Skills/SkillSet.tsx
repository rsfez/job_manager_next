import { SkillSet as SkillSetModel } from "../../data/SkillSet";
import { Role as RoleModel } from "../../data/Role";
import { Skill } from "./Skill";

export type SkillSetProps = {
  skillSet: SkillSetModel;
  selectedRole?: RoleModel;
};

export const SkillSet = ({ skillSet, selectedRole }: SkillSetProps) => (
  <>
    {skillSet.skills.map((skill, index) => (
      <Skill skill={skill} key={index} />
    ))}
  </>
);
