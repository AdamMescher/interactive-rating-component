import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --orange: hsl(25, 97%, 53%);
    --white: hsl(0, 0%, 100%);
    --lightGrey: hsl(217, 12%, 63%);
    --mediumGrey: hsl(216, 12%, 54%);
    --darkBlue: hsl(213, 19%, 18%);
    --veryDarkBlue: hsl(216, 12%, 8%);
    --fontFamily: "Overpass", sans-serif;
    --fs-body: 15 / 16 + "rem";
    --fw-regular: 400;
    --fw-bold: 700;
  }
`;

export default GlobalStyle;
