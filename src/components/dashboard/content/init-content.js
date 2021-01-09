import BasicSlide from 'components/resources/basic-slide';
import { useEffect, useState } from 'react';
import { db } from 'utils/Firebase';
import HeroBanner from './home/hero-banner';
import MusicList from './home/music-list';

export default function InitContent() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    db.collection('artists')
      .limit(20)
      .orderBy('createAt')
      .get()
      .then((res) => {
        let queryData = [];
        res.forEach((item) => {
          const data = item?.data();
          data.id = item.id;
          queryData.push(data);
        });
        setArtists(queryData);
      });
  }, []);
  useEffect(() => {
    db.collection('albums')
      .limit(20)
      .orderBy('createAt')
      .get()
      .then((res) => {
        let queryData = [];
        res.forEach((item) => {
          const data = item?.data();
          data.id = item.id;
          queryData.push(data);
        });
        setAlbums(queryData);
      });
  }, []);

  return (
    <>
      <HeroBanner />
      <section className="px-5 py-4">
        <BasicSlide
          title="Ultimos artistas agregados"
          data={artists}
          folderPath="artists"
          linkPath="artist"
        />
        <div className="mt-6">
          <BasicSlide
            title="Ultimos albums agregados"
            data={albums}
            folderPath="albums"
            linkPath="album"
          />
        </div>
        <MusicList className="mt-5" />
      </section>
    </>
  );
}
