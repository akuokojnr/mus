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
import Progress from "./Progress";

import { Wrapper, Inner, ProgressWrapper } from "./styles";

interface PlayerProps {
  audioSrc: string;
}

const Player: React.FC<PlayerProps> = ({ audioSrc }) => {
  const player = React.useRef<HTMLVimePlayerElement>(null);
  const [paused, setPaused] = React.useState(true);
  const [progress, setProgress] = React.useState<number>(0);

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

  const onTimeUpdate = (event: CustomEvent<number>) => {
    if (player.current) {
      const currentTime = event.detail;
      const totalTime = player.current.duration;
      let progress;

      if (currentTime === 0) {
        progress = 0;
      } else {
        const currentProgress = ((currentTime / totalTime) * 100).toFixed(2);
        progress = Number(currentProgress);
      }

      setProgress(progress);
    }
  };

  React.useEffect(() => {
    handlePlay();
  }, [paused]);

  return (
    <Wrapper>
      <VimePlayer
        controls={false}
        ref={player}
        onVCurrentTimeChange={onTimeUpdate}
      >
        <VimeAudio>
          <source data-src={audioSrc} type="audio/mp3" />
        </VimeAudio>
        <Inner>
          <VimeControls>
            <NextPrevious type="left" />
            <PlaybackControl status={paused} handleClick={onClick} />
            <NextPrevious type="right" />
          </VimeControls>
          <ProgressWrapper>
            <VimeCurrentTime />
            <Progress progress={progress} />
            <VimeEndTime />
          </ProgressWrapper>
        </Inner>
      </VimePlayer>
    </Wrapper>
  );
};

export default Player;
