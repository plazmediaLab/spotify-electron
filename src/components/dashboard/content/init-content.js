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
        console.log(querySnapshot);
        querySnapshot.forEach((item) => {
          const data = item?.data();
          data.id = item.id;
          queryData.push(data);
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
