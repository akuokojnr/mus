import * as React from "react";
import styled from "styled-components";

import media from "utils/media";

interface ArtistProfile {
  image: string;
  artist: string;
  songTitle: string;
}

const ArtistProfile: React.FC<ArtistProfile> = ({
  image,
  artist,
  songTitle,
}) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={image} alt="Artist image" />
      </ImgWrapper>
      <Details>
        <p>{songTitle}</p>
        <p>{artist}</p>
      </Details>
    </Wrapper>
  );
};

export default ArtistProfile;

const Wrapper = styled.div`
  display: none;
  align-items: center;
  overflow: hidden;
  margin-right: 3rem;
  width: 100%;
  max-width: 270px;

  ${media.lg`
    display: flex;
  `};
`;

const ImgWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border: 2px solid white;
  border-radius: 4px;
  margin: 0 1.5rem 0 0;

  img {
    object-fit: cover;
  }
`;

const Details = styled.div`
  p {
    color: ${({ theme }) => theme.colors.black};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 140px;

    &:first-of-type {
      font-weight: 600;
      font-weight: 1.2rem;
    }

    &:last-of-type {
      opacity: 0.8;
      font-size: 0.9rem;
    }
  }
`;
