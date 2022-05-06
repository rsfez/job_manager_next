import { SkillSet as SkillSetModel } from "../../data/SkillSet";
import { Role as RoleModel } from "../../data/Role";
import { Skill } from "./Skill";
import styled from "styled-components";
import { H4Yellow } from "../../design/Text";
import { Column } from "../../design/Containers";

type SkillSetProps = {
  skillSet: SkillSetModel;
  selectedRole?: RoleModel;
};

const SkillSetName = styled(H4Yellow)`
  align-self: center;
`;

export const SkillSet = ({ skillSet, selectedRole }: SkillSetProps) => (
  <Column>
    <SkillSetName>{skillSet.name}</SkillSetName>
    {skillSet.skills.map((skill, index) => (
      <Skill skill={skill} key={index} />
    ))}
  </Column>
);
