import BasicSlide from 'components/resources/basic-slide';
import { useEffect, useState } from 'react';
import { db } from 'utils/Firebase';
import HeroBanner from './home/hero-banner';

export default function InitContent() {
  const [artistss, setArtists] = useState([]);

  useEffect(
    () => {
      db.collection('artists')
        .limit(20)
        .orderBy('createAt')
        .onSnapshot((querySnapshot) => {
          let queryData = [];
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
        {artistss.length > 12 ? (
          <BasicSlide title="Ultimos artistas agregados" data={artistss} />
        ) : null}
        <h1>Home main content</h1>
      </section>
    </>
  );
}
