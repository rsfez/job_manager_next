import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

export const Column = styled(Container)`
  flex-direction: column;
`;

export const Row = styled(Container)`
  flex-direction: row;
`;
