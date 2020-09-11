import * as React from "react";

import { Wrapper } from "./styles";

interface ProfileProps {
  imageSrc: string;
}

const Profile: React.FC<ProfileProps> = ({ imageSrc }) => {
  return (
    <Wrapper>
      <img src={imageSrc} alt="profile picture" />
    </Wrapper>
  );
};

export default Profile;
