import CircularProgressMaterialIcon from 'components/resources/circular-progress-material-icon';
import { useEffect, useState } from 'react';
import { storage } from 'utils/Firebase';

export default function InitContent() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    storage
      .ref('others/platify-banner.jpg')
      .getDownloadURL()
      .then((res) => {
        setBanner(res);
      });
  }, []);

  return (
    <>
      {banner ? (
        <header
          style={{ backgroundImage: `url(${banner})` }}
          className="bg-cover bg-center h-36 w-full"></header>
      ) : (
        <div className="grid place-items-center w-full h-20 bg-background-dark">
          <div className="w-10 h-10">
            <CircularProgressMaterialIcon />
          </div>
        </div>
      )}
      <section className="px-5 py-4">
        <h1>Home main content</h1>
      </section>
    </>
  );
}
