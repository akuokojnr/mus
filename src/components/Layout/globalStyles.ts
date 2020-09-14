import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    -ms-overflow-style: none;  
    scrollbar-width: none;
    background: #171E31;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 992px) {
      background: transparent;
    }
  }
`;

export default GlobalStyles;
