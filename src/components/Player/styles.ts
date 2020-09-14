import styled from "styled-components";

import media from "utils/media";

const PLAYER_HEIGHT = 6;

export const Wrapper = styled.div`
  position: relative;
  height: ${PLAYER_HEIGHT}rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;

  --time-color: ${({ theme }) => theme.colors.gray};
  --time-font-size: 0.9rem;
  --font-weight: 600;

  ${media.lg`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 3rem;
  `};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  ${media.lg`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `};

  vime-controls {
    justify-content: center !important;
    margin-top: 0.5rem;
    min-width: 8rem;

    ${media.lg`
      justify-content: start !important;
      margin-top: 0;
      width: max-content !important;
      margin-right: 3rem;
    `};
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${media.lg`
    max-width: 800px;
  `};
`;
