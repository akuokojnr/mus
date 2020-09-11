import * as React from "react";
import {
  VimePlayer,
  VimeAudio,
  VimeControls,
  VimeCurrentTime,
  VimeEndTime,
} from "@vime/react";

import PlaybackControl from "./PlaybackControl";
import NextPrevious from "./NextPrevious";

import { Wrapper, Inner } from "./styles";

interface PlayerProps {
  audioSrc: string;
}

const Player: React.FC<PlayerProps> = ({ audioSrc }) => {
  const player = React.useRef<HTMLVimePlayerElement>(null);
  const [paused, setPaused] = React.useState(true);

  const onClick = () => {
    setPaused(!paused);
  };

  const handlePlay = () => {
    if (player.current) {
      if (paused) {
        player.current.pause();
      } else {
        player.current.play();
      }
    }
  };

  React.useEffect(() => {
    handlePlay();
  }, [paused]);

  return (
    <Wrapper>
      <VimePlayer controls={false} ref={player}>
        <VimeAudio>
          <source data-src={audioSrc} type="audio/mp3" />
        </VimeAudio>
        <Inner>
          <VimeControls>
            <NextPrevious type="left" />
            <PlaybackControl status={paused} handleClick={onClick} />
            <NextPrevious type="right" />
          </VimeControls>
          <div>
            <VimeCurrentTime />
            <VimeEndTime />
          </div>
        </Inner>
      </VimePlayer>
    </Wrapper>
  );
};

export default Player;
