import { useContext } from 'react';
import AppContext from 'reducer/App/AppContext';
import MusicListItem from './music-list-item';

export default function MusicList({ ...props }) {
  const appContext = useContext(AppContext);
  const { songs } = appContext;

  return (
    <table className="mt-5 w-full bg-opacity-50 tracking-widest uppercase text-xs">
      <thead>
        <tr className="border-b border-background-middlelight text-left">
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
        {songs?.map((item) => (
          <MusicListItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
