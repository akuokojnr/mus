import * as React from "react";
import styled from "styled-components";

import { ChevronLeft as LeftIcon } from "@styled-icons/heroicons-outline/ChevronLeft";
import { ChevronRight as RightIcon } from "@styled-icons/heroicons-outline/ChevronRight";

import media from "utils/media";

interface NextPreviousProps {
  type: "left" | "right";
}

const NextPrevious: React.FC<NextPreviousProps> = ({ type }) => {
  return (
    <Wrapper>
      {type === "left" ? <LeftIcon size={24} /> : <RightIcon size={24} />}
    </Wrapper>
  );
};

export default NextPrevious;

const Wrapper = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  svg {
    transform: scale(0.8);

    ${media.lg`
      transform: scale(1);
    `};
  }
`;
