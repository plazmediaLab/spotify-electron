import { Link } from '@reach/router';
import { useEffect, useState } from 'react';
import { db, storage } from 'utils/Firebase';

export default function AlbumParamContent(props) {
  const [loadingArtist, setLoadingArtist] = useState(true);
  const [loadingCover, setLoadingCover] = useState(true);
  const [albumInfo, setAlbumInfo] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);
  const [albumCover, setAlbumCover] = useState(null);

  const { albumID } = props;

  useEffect(() => {
    db.collection('albums')
      .doc(albumID)
      .get()
      .then((res) => {
        setAlbumInfo(res.data());
      });
  }, [albumID]);
  useEffect(() => {
    if (albumInfo) {
      db.collection('artists')
        .doc(albumInfo?.artist)
        .get()
        .then((res) => {
          setArtistInfo(res.data());
          setLoadingArtist(false);
        });
    }
  }, [albumInfo]);
  useEffect(() => {
    if (albumInfo) {
      storage
        .ref(`albums/${albumInfo.cover}`)
        .getDownloadURL()
        .then((res) => {
          setAlbumCover(res);
          setLoadingCover(false);
        });
    }
  }, [albumInfo]);

  if (loadingArtist && loadingCover) {
    return <p>Loading...</p>;
  }

  return (
    <section className="px-5 py-4">
      <header className="flex gap-x-5">
        <div
          className="bg-cover bg-center bg-no-repeat w-36 min-w-36 h-36 shadow-card"
          style={{ backgroundImage: `url(${albumCover})` }}></div>
        <div className="flex-1">
          <p className="text-xs tracking-widest uppercase">Álbum</p>
          <h1 className="text-3xl font-medium tracking-wide">{albumInfo?.name}</h1>
          <p className="font-light text-secondary-dark tracking-wider text-sm mt-3">
            De{' '}
            <Link
              to={`/dashboard/artist/${albumInfo?.artist}`}
              className="text-secondary hover:underline">
              {artistInfo?.name}
            </Link>
          </p>
          <p className="font-light text-secondary-dark tracking-wider text-sm">0 canciones</p>
        </div>
      </header>
      <main className="mt-4">
        <h2 className="text-secondary-dark">Lista de canciones</h2>
        <hr className="block border-background-middlelight my-2" />
      </main>
    </section>
  );
}
