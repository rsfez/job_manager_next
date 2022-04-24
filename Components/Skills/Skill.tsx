import styled from "styled-components";
import {
  Skill as SkillModel,
  Trend as TrendEnum,
  trendMapper as _trendMapper,
} from "../../data/Skill";
import { Flex, Row } from "../../design/Containers";
import { P3 } from "../../design/Text";
import { Mark } from "./Mark";
import { Trend } from "./Trend";
import { spacing10 } from "../../design/constants/dimensions";

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

export const Skill = ({ skill, trendMapper = _trendMapper }: SkillProps) => {
  const trend = trendMapper({ trend: skill.trend });
  return (
    <Container>
      <P3>{skill.name}</P3>
      <Row>
        {skill.trend && <Trend trend={trend} />}
        <MarkContainer>
          <Mark mark={skill.mark} />
        </MarkContainer>
      </Row>
    </Container>
  );
};
