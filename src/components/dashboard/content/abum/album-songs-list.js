import { useContext, useEffect, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import AlbumListItem from './album-list-item';

export default function AlbumSongsList({ albumID, setAlbumSongsCount }) {
  const [songsOfAlbum, setSongsOfAlbum] = useState([]);

  const appContext = useContext(AppContext);
  const { songs } = appContext;

  useEffect(() => {
    if (songs) {
      const newList = songs.filter((item) => item?.albumID === albumID);
      setAlbumSongsCount(newList?.length);
      setSongsOfAlbum(newList);
    }
  }, [songs, albumID]);

  return (
    <table className="mt-5 w-full bg-opacity-50 tracking-widest uppercase text-xs">
      <thead className="border-b border-background-middlelight text-left">
        <tr>
          <th className="py-2 px-1 font-light mt-small w-6 text-center">
            <svg
              className="w-4 h-4 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </th>
          <th className="py-2 px-1 font-light mt-small w-8"></th>
          <th className="py-2 px-3 font-light mt-small truncate">Titulo</th>
          <th className="py-2 px-2 font-light mt-small w-14 text-center">
            <svg
              className="w-5 h-5 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </th>
        </tr>
      </thead>
      <tbody>
        {songsOfAlbum.map((item, index) => (
          <AlbumListItem key={item.id} item={item} index={index}></AlbumListItem>
        ))}
      </tbody>
    </table>
  );
}
