import LikeMusicButton from 'components/resources/like-music-button';
import dateFormat from 'helpers/dateFormat';

export default function MusicListItem({ item }) {
  const { like, songName, artistName, albumName, createAt } = item;

  console.log(createAt);

  return (
    <tr className="normal-case text-sm tracking-wider hover:bg-background-middlelight">
      <td className="truncate">
        <LikeMusicButton state={like} />
      </td>
      <td className="truncate">{songName}</td>
      <td className="truncate">{artistName}</td>
      <td className="truncate">{albumName}</td>
      <td className="truncate text-center text-secondary-dark">{dateFormat(createAt)}</td>
    </tr>
  );
}
