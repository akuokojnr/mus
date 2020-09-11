import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "utils/theme";

import GlobalStyles from "./globalStyles";
import { Main } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Main>{children}</Main>
      </>
    </ThemeProvider>
  );
};

export default Layout;
