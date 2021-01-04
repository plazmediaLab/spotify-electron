export default function AlbumParamContent(props) {
  const { albumID } = props;

  return (
    <div>
      <h1>Album param conten</h1>
      <p>{albumID}</p>
    </div>
  );
}
