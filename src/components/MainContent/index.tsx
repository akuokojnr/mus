import * as React from "react";

import { Section } from "./styles";

interface MainContentProps {
  children?: React.ReactChildren;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <Section>{children}</Section>
);

export default MainContent;
