import styled from "styled-components";

export const Spacing = styled.div<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  margin-top: ${(props) => props.top ?? 0};
  margin-right: ${(props) => props.right ?? 0};
  margin-bottom: ${(props) => props.bottom ?? 0};
  margin-left: ${(props) => props.left ?? 0};
`;
