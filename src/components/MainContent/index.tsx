import * as React from "react";

import Header from "components/Header";

import { Section, Content } from "./styles";

interface MainContentProps {
  children?: React.ReactChildren;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <Section>
    <Content>
      <Header
        title="Home"
        imageSrc="https://ui-avatars.com/api/?name=Elon+Musk&size=256"
      />
      {children}
    </Content>
  </Section>
);

export default MainContent;
