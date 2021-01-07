import { useContext } from 'react';
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
  const { play, volume, setPlayingMethod } = playerContext;

  const handleProgress = (e) => {
    const { playedSeconds, loadedSeconds } = e;
  };

  return (
    <section {...props}>
      <div className="flex gap-x-2 items-center justify-center text-secondary-dark">
        <ShuffleButton />
        <PrevButton />
        <PlayButton play={play} setPlayingMethod={setPlayingMethod} />
        <NextButton />
        <RepeatButton />
      </div>
      <PlayerStatusRange className="flex items-center gap-x-3 w-full  md:max-w-3xl lg:max-w-4xl" />
      <ReactPlayer
        url="https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/music%2FQuisiera%20Saber%20-%20Los%20Daniels%20ft.%20Natalia%20Lafourcade.mp3?alt=media&token=cbf2840d-f098-40b5-bf46-31005ae51e20"
        playing={play}
        volume={volume}
        muted={false}
        width={0}
        height={0}
        onProgress={(e) => handleProgress(e)}
      />
    </section>
  );
}
