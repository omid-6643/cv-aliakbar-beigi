import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #323742 !important;
    /* box-shadow: 0 22em #272b33 inset ; */

  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default GlobalStyle;
