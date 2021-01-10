import ButtonPlayMusicOnList from 'components/resources/button-play-music-on-list';
import LikeMusicButton from 'components/resources/like-music-button';
import dateFormat from 'helpers/dateFormat';
import { useContext, useEffect, useState } from 'react';
import PlayerContext from 'reducer/Player/PlayerContext';

export default function MusicListItem({ item }) {
  const [onPlay, setOnPlay] = useState(null);

  const { like, songName, artistName, albumName, createAt, id } = item;

  const playerContext = useContext(PlayerContext);
  const { songOnPlay, setSongOnPlayMethod } = playerContext;

  const setPlaySong = () => {
    setSongOnPlayMethod(item);
  };

  useEffect(() => {
    if (songOnPlay?.id === id) {
      setOnPlay(true);
    } else {
      setOnPlay(null);
    }
    // eslint-disable-next-line
  }, [songOnPlay]);

  return (
    <tr className="group normal-case text-sm tracking-wider hover:bg-background-middlelight">
      <td>
        <ButtonPlayMusicOnList setPlaySong={setPlaySong} onPlay={onPlay} />
      </td>
      <td className="truncate">
        <LikeMusicButton state={like} />
      </td>
      <td className={`truncate" ${onPlay ? 'text-brand-400' : ''}`}>{songName}</td>
      <td className={`truncate ${onPlay ? 'text-brand-400' : ''}`}>{artistName}</td>
      <td className={`truncate hidden lg:table-cell ${onPlay ? 'text-brand-400' : ''}`}>
        {albumName}
      </td>
      <td className={`truncate text-secondary-dark ${onPlay ? 'text-brand-400' : ''}`}>
        {dateFormat(createAt)}
      </td>
    </tr>
  );
}
