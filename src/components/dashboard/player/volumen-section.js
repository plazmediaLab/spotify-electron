import { useEffect, useState } from 'react';
import MuteButton from './sound/mute-button';
import VolumeRange from './sound/volume-range';

export default function VolumenSection({ ...props }) {
  const [volume, setVolume] = useState(50);
  const [lastVolume, setLastVolume] = useState(volume);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    if (Number(volume) === 0) {
      setMute(true);
    } else {
      setMute(false);
    }
  }, [volume]);
  useEffect(() => {
    if (mute) {
      setVolume(0);
    }
  }, [mute]);

  return (
    <section {...props}>
      <MuteButton setVolume={setVolume} mute={mute} setMute={setMute} lastVolume={lastVolume} />
      <VolumeRange volume={volume} setVolume={setVolume} setLastVolume={setLastVolume} />
    </section>
  );
}
