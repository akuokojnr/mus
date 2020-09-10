import styled from "styled-components";

import media from "utils/media";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  ${media.lg`
    flex-direction: row;
  `};
`;
