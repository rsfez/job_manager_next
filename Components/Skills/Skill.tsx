import styled from "styled-components";
import {
  Skill as SkillModel,
  Trend as TrendEnum,
  trendMapper as _trendMapper,
} from "../../data/Skill";
import { Row } from "../../design/Containers";
import { P3 } from "../../design/Text";
import { Mark } from "./Mark";
import { Trend } from "./Trend";
import { Spacing } from "../../design/Spacing";
import { spacing5 } from "../../design/constants/dimensions";

export type SkillProps = {
  skill: SkillModel;
  trendMapper?: ({ trend }: { trend: string }) => TrendEnum;
};

const Container = styled(Row)`
  justify-content: space-between;
`;

export const Skill = ({ skill, trendMapper = _trendMapper }: SkillProps) => {
  const trend = trendMapper({ trend: skill.trend });
  return (
    <Container>
      <P3>{skill.name}</P3>
      <Row>
        {skill.trend && (
          <Row>
            <Trend trend={trend} />
            <Spacing right={spacing5} />
          </Row>
        )}
        <Mark mark={skill.mark} />
      </Row>
    </Container>
  );
};
