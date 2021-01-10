import { createGlobalStyle } from "styled-components";
import { primaryFont } from "../settings/Typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-weight: inherit;
	font-style: inherit;
	font-size: 100%;
	font-family: inherit;
  	background:transparent;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}


${normalize()}

html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: ${primaryFont};
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img{
  max-width: 100%;
}
`;
