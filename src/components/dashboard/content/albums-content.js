import { useContext } from 'react';
import AppContext from 'reducer/App/AppContext';

export default function AlbumsContent() {
  const appContext = useContext(AppContext);
  const { albums } = appContext;

  console.log(albums);

  return (
    <section className="px-5 py-4">
      <h1>list Albums Content</h1>
    </section>
  );
}
