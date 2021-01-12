import NoSongs from 'components/resources/no-songs';
import timeFormat from 'helpers/timeFormat';
import { useContext, useEffect, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import { storage } from 'utils/Firebase';
import AlbumListSongs from './album-list-songs';

export default function AlbumItem({ item }) {
  const [coverAlbum, setCoverAlbum] = useState('');
  const [songsAlbum, setSongsAlbum] = useState([]);
  const [albumDuration, setAlbumDuration] = useState(0);

  const appContext = useContext(AppContext);
  const { songs } = appContext;

  useEffect(() => {
    if (item) {
      storage
        .ref(`albums/${item?.cover}`)
        .getDownloadURL()
        .then((res) => {
          setCoverAlbum(res);
        });
    }
  }, [item]);
  useEffect(() => {
    if (item && songs) {
      const newList = songs.filter((i) => i?.albumID === item?.id);
      setSongsAlbum(newList);
    }
  }, [item, songs]);
  useEffect(() => {
    if (songsAlbum) {
      let time = 0;
      songsAlbum?.forEach((item) => {
        const songDuration = Number(item.duration);
        time += Number(songDuration);
      });
      setAlbumDuration(time);
    }
  }, [songsAlbum]);

  return (
    <section className="mb-14">
      <aside className="flex space-x-3 mb-5">
        <div
          className={`bg-background-light w-32 h-32 bg-cover bg-no-repeat shadow-2xl`}
          style={{ backgroundImage: `url(${coverAlbum})` }}
        />
        <div className="flex flex-col">
          <p className="text-secondary-dark text-sm tracking-wider mb-2">
            Duración: {timeFormat(albumDuration)}
          </p>
          <h2 className="flex-1 text-2xl font-medium tracking-wide">{item?.name}</h2>
          <div className="flex space-x-2 items-center">
            <button
              disabled={true}
              type="button"
              className="disabled:opacity-50 rounded-full border-2 transform hover:scale-105 duration-200 motion-reduce:transform-none border-secondary-dark hover:border-secondary w-8 h-8 grid place-items-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
              disabled={true}
              type="button"
              className="disabled:opacity-50 rounded-full border-2 transform hover:scale-105 duration-200 motion-reduce:transform-none border-secondary-dark hover:border-secondary w-8 h-8 grid place-items-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <p className="text-xs text-secondary-dark tracking-wider">
              <svg
                className="w-4 h-6 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>{' '}
              Proximamente
            </p>
          </div>
        </div>
      </aside>
      <AlbumListSongs songsAlbum={songsAlbum} />
      {songsAlbum?.length === 0 && <NoSongs />}
    </section>
  );
}
