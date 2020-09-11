import styled from "styled-components";

import media from "utils/media";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: "Cabin";
  font-weight: 600;

  ${media.sm`
    font-size: calc(1.5vw + 2rem);
  `};

  ${media.lg`
    font-size: 4.2rem;
  `};
`;
