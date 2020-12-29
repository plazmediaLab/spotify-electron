import CircularProgressMaterialIcon from 'components/resources/circular-progress-material-icon';
import { useEffect, useState } from 'react';
import { db } from 'utils/Firebase';

export default function ArtistParamContent(props) {
  const [artistInfo, setArtistInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { artistID } = props;

  useEffect(() => {
    db.collection('artists')
      .doc(artistID)
      .get()
      .then((res) => {
        setArtistInfo(res?.data());
        // setArtistInfo(res.docs[0].data());
        setLoading(false);
      });
  }, [artistID]);

  if (loading) {
    return (
      <div className="grid place-items-center py-28">
        <div className="w-14 h-14 text-brand-500">
          <CircularProgressMaterialIcon />
        </div>
      </div>
    );
  }

  return (
    <section className="px-5 py-4">
      <div>Artist: {artistInfo.name}</div>
      <div>slug: {artistInfo.slug}</div>
      <div>Cover: {artistInfo.hero}</div>
    </section>
  );
}
