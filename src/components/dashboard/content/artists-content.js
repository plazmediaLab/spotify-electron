import { Link } from '@reach/router';
import { useContext, useEffect, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import { storage } from 'utils/Firebase';

function ArtistItem({ item }) {
  const [banner, setBanner] = useState('');

  useEffect(() => {
    storage
      .ref(`artists/${item.cover}`)
      .getDownloadURL()
      .then((res) => {
        setBanner(res);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <Link
      to={`/dashboard/artist/${item.id}`}
      className="tracking-wider text-secondary-dark hover:underline hover:text-green-500">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="shadow-xl hover:shadow-container w-20 h-20 rounded-full border-2 border-transparent hover:border-green-500 bg-cover bg-center"></div>
      <p className="mt-1 text-xs w-20 truncate">{item.name}</p>
    </Link>
  );
}

export default function ArtistsContent() {
  const appContext = useContext(AppContext);
  const { artists } = appContext;

  return (
    <section className="px-5 py-4">
      <h1 className="text-3xl tracking-wider">Artistas</h1>
      <hr className="block border-background-middlelight my-2" />
      <main className="flex flex-wrap text-center gap-x-7 gap-y-4 mt-5">
        {artists?.map((item) => (
          <ArtistItem key={item.id} item={item} />
        ))}
      </main>
    </section>
  );
}
