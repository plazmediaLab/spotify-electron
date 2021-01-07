import { useContext, useEffect } from 'react';
import PlayerContext from 'reducer/Player/PlayerContext';
import MuteButton from './sound/mute-button';
import VolumeRange from './sound/volume-range';

export default function VolumenSection({ ...props }) {
  const playerContext = useContext(PlayerContext);
  const {
    volume,
    lastVolume,
    mute,
    setVolumeMethod,
    setLastVolumeMethod,
    setMuteMethod
  } = playerContext;

  useEffect(() => {
    if (Number(volume) > 0 && mute) {
      setVolumeMethod(lastVolume);
      setMuteMethod(false);
    }
    if (Number(volume) === 0 && !mute) {
      setMuteMethod(true);
    }
    // eslint-disable-next-line
  }, [volume]);
  useEffect(() => {
    if (mute) {
      setVolumeMethod(0);
    }
    // eslint-disable-next-line
  }, [mute]);

  useEffect(() => {
    setLastVolumeMethod(volume);
    // eslint-disable-next-line
  }, []);

  return (
    <section {...props}>
      <MuteButton
        setVolumeMethod={setVolumeMethod}
        mute={mute}
        setMuteMethod={setMuteMethod}
        lastVolume={lastVolume}
      />
      <VolumeRange
        volume={volume}
        setVolumeMethod={setVolumeMethod}
        setLastVolumeMethod={setLastVolumeMethod}
      />
    </section>
  );
}
