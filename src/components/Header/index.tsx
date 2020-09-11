import * as React from "react";

import Profile from "components/Profile";

import { Wrapper, Title } from "./styles";

interface HeaderProps {
  title: string;
  imageSrc: string;
}

const Header: React.FC<HeaderProps> = ({ title, imageSrc }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Profile imageSrc={imageSrc} />
    </Wrapper>
  );
};

export default Header;
