import { useContext, useEffect, useState } from 'react';
import AppContext from 'reducer/App/AppContext';

export default function AlbumContent({ albumID }) {
  const [songsOfAlbum, setSongsOfAlbum] = useState([]);
  console.log(albumID);

  const appContext = useContext(AppContext);
  const { songs } = appContext;

  useEffect(() => {
    if (songs) {
      const newList = songs.filter((item) => item.albumID === albumID);
      setSongsOfAlbum(newList);
    }
  }, [songs, albumID]);

  console.log(songsOfAlbum);

  return (
    <>
      <h2 className="text-secondary-dark">Lista de canciones</h2>
      <hr className="block border-background-middlelight my-2" />
    </>
  );
}
