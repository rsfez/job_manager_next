import { HeaderText as _HeaderText, HeaderTitle } from "../../design/Text";
import styled from "styled-components";
import {
  appLeftPadding,
  spacing4,
  spacing8,
} from "../../design/constants/dimensions";
import { Spacing } from "../../design/Spacing";

export type HeaderParams = {
  backgroundColor: string;
  textColor: string;
  fullName: string;
  roleName: string;
  companyName: string;
};

const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: row;
  padding: ${spacing4} 0 ${spacing8} ${appLeftPadding};
  background-color: ${(props) => props.backgroundColor};
`;

const HeaderText = styled(_HeaderText)`
  align-self: center;
`;

export const Header = ({
  backgroundColor,
  textColor,
  companyName,
  roleName,
  fullName,
}: HeaderParams) => (
  <Container backgroundColor={backgroundColor}>
    <HeaderTitle color={textColor}>{fullName}</HeaderTitle>
    <Spacing right={spacing4} />
    <HeaderText color={textColor}>
      {roleName} - {companyName}
    </HeaderText>
  </Container>
);
