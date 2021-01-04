import { useEffect, useState } from 'react';
import { storage } from 'utils/Firebase';

export default function Banner({ bannerURL, name }) {
  const [banner, setBanner] = useState('');

  useEffect(() => {
    storage
      .ref(`artists/${bannerURL}`)
      .getDownloadURL()
      .then((res) => {
        setBanner(res);
      })
      .catch((err) => {
        console.log(err.code);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <header
      className="relative tracking-wider bg-cover bg-center h-48 lg:h-72 w-full flex flex-col justify-end items-start px-5 py-4"
      style={{ backgroundImage: `url(${banner})` }}>
      <p className="uppercase font-light text-xs" style={{ zIndex: 1 }}>
        Artista
      </p>
      <h2 className="text-3xl font-medium" style={{ zIndex: 1 }}>
        {name}
      </h2>
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-background to-transparent"></div>
    </header>
  );
}
