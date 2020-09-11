import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    -ms-overflow-style: none;  
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyles;
