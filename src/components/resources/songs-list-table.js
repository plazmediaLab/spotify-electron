import MusicListItem from 'components/dashboard/content/home/music-list-item';
import { useContext, useEffect, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import NoSongs from './no-songs';

export default function SongsListTable() {
  const [songsLikeList, setSongsLikeList] = useState([]);

  const appContext = useContext(AppContext);
  const { songs } = appContext;

  useEffect(() => {
    if (songs) {
      const newList = songs.filter((item) => item.like);
      setSongsLikeList(newList);
    }
  }, [songs]);

  return (
    <>
      <table className="mt-5 w-full bg-opacity-50 tracking-widest uppercase text-xs">
        <thead className="border-b border-background-middlelight text-left">
          <tr>
            <th className="py-2 font-light mt-small w-8"></th>
            <th className="py-2 font-light mt-small w-8"></th>
            <th className="py-2 font-light mt-small">Titulo</th>
            <th className="py-2 font-light mt-small">Artista</th>
            <th className="py-2 font-light mt-small hidden lg:table-cell">Album</th>
            <th className="py-3 w-24">
              <svg
                className="w-4 h-4 mb-small inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {songsLikeList?.map((item) => (
            <MusicListItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      {songsLikeList?.length === 0 && <NoSongs />}
    </>
  );
}
