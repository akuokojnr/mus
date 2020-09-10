import styled from "styled-components";

import media from "utils/media";

export const Main = styled.main`
  height: 100vh;
  overflow: hidden;

  ${media.lg`
    display: flex;
    flex-direction: row;
  `};
`;
