import styled from "styled-components";

import media from "utils/media";

export const Wrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  ${media.lg`
    height: 3rem;
    width: 3rem;
  `};
`;
