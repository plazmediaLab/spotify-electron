import { useContext, useRef } from 'react';
import PlayerContext from 'reducer/Player/PlayerContext';
import NextButton from './sound/controls/next-button';
import PlayButton from './sound/controls/play-button';
import PrevButton from './sound/controls/prev-button';
import RepeatButton from './sound/controls/repeat-button';
import ShuffleButton from './sound/controls/shuffle-button';
import PlayerStatusRange from './sound/player-status-range';
import ReactPlayer from 'react-player';

export default function PlayerSection({ ...props }) {
  const playerContext = useContext(PlayerContext);
  const {
    play,
    volume,
    time,
    totalTime,
    loop,
    songOnPlay,
    setPlayingMethod,
    setTimeMethod,
    setTotalTimeMethod,
    setLoopMethod
  } = playerContext;

  const handleProgress = (e) => {
    const { playedSeconds, loadedSeconds } = e;

    setTimeMethod(playedSeconds);
    setTotalTimeMethod(loadedSeconds);
  };

  const player = useRef();

  const handleSeekTo = (time) => {
    player.current.seekTo(time, 'seconds');
  };

  return (
    <section {...props}>
      <div className="flex gap-x-2 items-center justify-center text-secondary-dark">
        <ShuffleButton />
        <PrevButton />
        <PlayButton play={play} setPlayingMethod={setPlayingMethod} />
        <NextButton />
        <RepeatButton setLoopMethod={setLoopMethod} loop={loop} />
      </div>
      <PlayerStatusRange
        className="flex items-center gap-x-3 w-full  md:max-w-3xl lg:max-w-4xl"
        time={time}
        totalTime={totalTime}
        setTimeMethod={setTimeMethod}
        handleSeekTo={handleSeekTo}
      />
      <ReactPlayer
        ref={player}
        url={songOnPlay?.file}
        playing={play}
        volume={volume}
        muted={false}
        width={0}
        height={0}
        onProgress={(e) => handleProgress(e)}
        loop={loop}
        // onSeek={(e) => console.log(e)}
      />
    </section>
  );
}
