import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Adam';
    src: url('/fonts/adam.otf');
  }

  @font-face {
    font-family: 'Gunzo2';
    src: url('/fonts/gunzo2.otf');
  }
`;

export default FontStyles;
