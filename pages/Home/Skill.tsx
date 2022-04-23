import styled from "styled-components";
import { Skill as SkillModel } from "../../data/Skill";
import { P3 } from "../../design/Text";
import { Mark } from "./Mark";

export type SkillProps = {
  skill: SkillModel;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Skill = ({ skill }: SkillProps) => (
  <Container>
    <P3>{skill.name}</P3>
    <Mark mark={skill.mark} />
  </Container>
);
