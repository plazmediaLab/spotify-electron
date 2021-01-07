import { useContext } from 'react';
import PlayerContext from 'reducer/Player/PlayerContext';
import NextButton from './sound/controls/next-button';
import PlayButton from './sound/controls/play-button';
import PrevButton from './sound/controls/prev-button';
import RepeatButton from './sound/controls/repeat-button';
import ShuffleButton from './sound/controls/shuffle-button';
import PlayerStatusRange from './sound/player-status-range';

export default function PlayerSection({ ...props }) {
  const playerContext = useContext(PlayerContext);
  const { play, setPlayingMethod } = playerContext;

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
    </section>
  );
}
