import { Link } from '@reach/router';
import { useContext, useEffect, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import { storage } from 'utils/Firebase';

function AlbumItem({ item }) {
  const [banner, setBanner] = useState('');

  useEffect(() => {
    storage
      .ref(`albums/${item.cover}`)
      .getDownloadURL()
      .then((res) => {
        setBanner(res);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <Link
      to={`/dashboard/album/${item.id}`}
      className="tracking-wider text-secondary-dark hover:underline hover:text-green-500">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="shadow-xl hover:shadow-container w-28 h-28 border-2 border-transparent hover:border-green-500 bg-cover bg-center bg-no-repeat"></div>
      <p className="mt-1 text-xs w-28">{item.name}</p>
    </Link>
  );
}

export default function AlbumsContent() {
  const appContext = useContext(AppContext);
  const { albums } = appContext;

  return (
    <section className="px-5 py-4">
      <h1 className="text-3xl tracking-wider">Albums</h1>
      <hr className="block border-background-middlelight my-2" />
      <main className="flex flex-wrap text-center gap-4 mt-5">
        {albums?.map((item) => (
          <AlbumItem key={item.id} item={item} />
        ))}
      </main>
    </section>
  );
}
