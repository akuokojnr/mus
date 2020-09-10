import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "utils/theme";

import { Main } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
