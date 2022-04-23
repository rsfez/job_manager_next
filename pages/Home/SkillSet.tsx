import { SkillSet as SkillSetModel } from "../../data/SkillSet";
import { Role as RoleModel } from "../../data/Role";
import { Skill } from "./Skill";
import styled from "styled-components";

export type SkillSetProps = {
  skillSet: SkillSetModel;
  selectedRole?: RoleModel;
};

const Container = styled.div`
  display: flex;
`;

export const SkillSet = ({ skillSet, selectedRole }: SkillSetProps) => (
  <>
    {skillSet.skills.map((skill, index) => (
      <Skill skill={skill} key={index} />
    ))}
  </>
);
