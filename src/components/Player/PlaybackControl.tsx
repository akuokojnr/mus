import * as React from "react";
import styled from "styled-components";

import { Play as PlayIcon } from "@styled-icons/ionicons-outline/Play";
import { Pause as PauseIcon } from "@styled-icons/bootstrap/Pause";

interface PlayProps {
  status: boolean;
  handleClick: () => void;
}

const PlaybackControl: React.FC<PlayProps> = ({ status, handleClick }) => (
  <Wrapper onClick={handleClick}>
    {status ? <PlayIcon size={20} /> : <PauseIcon size={26} />}
  </Wrapper>
);

export default PlaybackControl;

const Wrapper = styled.button`
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border: none;
  outline: none;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
