import { useContext } from 'react';
import PlayerContext from 'reducer/Player/PlayerContext';

export default function AlbumOnPlaySection({ ...props }) {
  const playerContext = useContext(PlayerContext);
  const { songOnPlay } = playerContext;

  if (!songOnPlay) {
    return (
      <section {...props}>
        <div className="text-secondary-dark w-18 min-w-18 h-18 bg-center bg-no-repeat bg-cover bg-background-light grid place-items-center">
          <svg
            className="w-9 h-9 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
        </div>
      </section>
    );
  }

  const { coverUrl, songName, artistName } = songOnPlay;

  return (
    <section {...props}>
      <div
        className="w-18 min-w-18 h-18 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${coverUrl})`
        }}></div>
      <div className="max-w-18x3">
        <p className="text-md leading-5">{songName}</p>
        <p className="text-xs text-secondary-dark">{artistName}</p>
      </div>
    </section>
  );
}
