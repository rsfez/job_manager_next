import styled from "styled-components";
import { map, Skill as SkillModel, Trend as TrendEnum } from "../../data/Skill";
import { Flex, Row } from "../../design/Containers";
import { P3 } from "../../design/Text";
import { Mark } from "./Mark";
import { Trend } from "./Trend";
import { spacing10, spacing7 } from "../../design/constants/dimensions";
import { Spacing } from "../../design/Spacing";

type SkillProps = {
  skill: SkillModel;
  trendMapper?: ({ trend }: { trend: string }) => TrendEnum;
};

const Container = styled(Row)`
  justify-content: space-between;
`;

const MarkContainer = styled(Flex)`
  justify-content: end;
  width: ${spacing10};
`;

export const Skill = ({ skill }: SkillProps) => (
  <Container>
    <P3>{skill.name}</P3>
    <Row>
      {skill.trend && <Trend trend={map({ trend: skill.trend })} />}
      <MarkContainer>
        <Mark mark={skill.mark} />
      </MarkContainer>
      <Spacing right={spacing7} />
    </Row>
  </Container>
);
