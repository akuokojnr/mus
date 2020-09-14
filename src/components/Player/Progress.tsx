import * as React from "react";
import styled from "styled-components";

interface ProgressProps {
  progress: number;
}

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <Wrapper>
      <Track width={progress} />
    </Wrapper>
  );
};

export default Progress;

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gray2};
  height: 0.3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  margin: 0 1.6rem;
`;

const Track = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.green};
  width: ${({ width }: { width: number }) => `${width}%`};
`;
