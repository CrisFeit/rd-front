import { createGlobalStyle } from "styled-components";
import { primaryFont } from "../settings/Typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`

${normalize()}

html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img{
  max-width: 100%;
}
`;
