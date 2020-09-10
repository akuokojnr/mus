import styled from "styled-components";

import media from "utils/media";

const PLAYER_HEIGHT = 6;

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black2};
  width: 100vw;
  height: calc(100vh - 3rem);

  ${media.lg`
    width: calc(100vw - 350px);
    height: calc(100vh - ${PLAYER_HEIGHT}rem);
  `};
`;
