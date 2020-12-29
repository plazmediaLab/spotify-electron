import BasicSlide from 'components/resources/basic-slide';
import { useEffect, useState } from 'react';
import { db } from 'utils/Firebase';
import HeroBanner from './home/hero-banner';

export default function InitContent() {
  const [artists, setArtists] = useState([]);

  useEffect(
    () => {
      db.collection('artists').onSnapshot((querySnapshot) => {
        let queryData = [];
        querySnapshot.forEach((item) => {
          queryData.push(item?.data());
        });
        setArtists(queryData);
      });
    },
    [
      /* dependencia */
    ]
  );

  return (
    <>
      <HeroBanner />
      <section className="px-5 py-4">
        <BasicSlide title="Ultimos artistas agregados" data={artists} />
        <h1>Home main content</h1>
      </section>
    </>
  );
}
