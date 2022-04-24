import { createGlobalStyle } from "styled-components";
import { assetPrefix } from "./constants/Paths";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Adam';
    src: url(${`${assetPrefix}/fonts/adam.otf`});
  }

  @font-face {
    font-family: 'Gunzo2';
    src: url(${`${assetPrefix}/fonts/gunzo2.otf`});
  }
`;

export default FontStyles;
