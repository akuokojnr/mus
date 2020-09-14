import styled from "styled-components";

import media from "utils/media";

const PLAYER_HEIGHT = 6;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${PLAYER_HEIGHT}rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;

  --time-color: ${({ theme }) => theme.colors.gray};
  --time-font-size: 0.9rem;
  --font-weight: 600;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;

  ${media.lg`
    min-width: 840px;
  `};
`;
