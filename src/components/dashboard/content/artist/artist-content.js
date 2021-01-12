import { useContext, useEffect, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import AlbumItem from './album-item';

export default function ArtistContent({ artistID }) {
  const [artistAlbums, setArtistAlbums] = useState([]);

  const appContext = useContext(AppContext);
  const { albums } = appContext;

  useEffect(() => {
    if (albums) {
      const newList = albums?.filter((item) => item.artist === artistID);
      setArtistAlbums(newList);
    }
  }, [albums, artistID]);

  return (
    <aside className="mt-6">
      {artistAlbums.map((item) => (
        <AlbumItem key={item.id} item={item} />
      ))}
    </aside>
  );
}
