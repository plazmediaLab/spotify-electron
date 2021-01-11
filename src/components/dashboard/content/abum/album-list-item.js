import LikeMusicButton from 'components/resources/like-music-button';
import timeFormat from 'helpers/timeFormat';
import ButtonPlayMusicOnList from 'components/resources/button-play-music-on-list';
import { useContext, useEffect, useState } from 'react';
import PlayerContext from 'reducer/Player/PlayerContext';

export default function AlbumListItem({ item, index }) {
  const [onPlay, setOnPlay] = useState(null);

  const playerContext = useContext(PlayerContext);
  const { play, songOnPlay, setSongOnPlayMethod, setPlayingMethod } = playerContext;

  const setPlaySong = () => {
    setSongOnPlayMethod(item);
    setPlayingMethod(true);
  };

  useEffect(() => {
    if (songOnPlay?.id === item?.id) {
      setOnPlay(true);
    } else {
      setOnPlay(null);
    }
    // eslint-disable-next-line
  }, [songOnPlay]);

  return (
    <tr className="select-none group normal-case text-sm tracking-wider hover:bg-background-middlelight border-b border-background-middlelight">
      <td className="px-2 w-6 group relative">
        <p className={`group-hover:invisible absolute top-3 left-5 ${onPlay ? 'invisible' : ''}`}>
          {index + 1}
        </p>
        <ButtonPlayMusicOnList
          play={play}
          setPlaySong={setPlaySong}
          onPlay={onPlay}
          setPlayingMethod={setPlayingMethod}
        />
      </td>
      <td className="px-1">
        <LikeMusicButton like={item?.like} id={item.id} />
      </td>
      <td className={`px-3 truncate text-secondary-dark ${onPlay ? 'text-brand-400' : ''}`}>
        <span className={`${onPlay ? 'text-brand-400' : ''} text-secondary`}>{item?.songName}</span>{' '}
        - {item?.albumName}
      </td>
      <td className={`px-2 text-center ${onPlay ? 'text-brand-400' : ''}`}>
        {timeFormat(Number(item?.duration))}
      </td>
    </tr>
  );
}
