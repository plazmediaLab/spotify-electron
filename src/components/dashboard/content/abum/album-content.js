import AlbumSongsList from './album-songs-list';

export default function AlbumContent({ albumID, setAlbumSongsCount }) {
  return (
    <>
      <h2 className="text-secondary-dark">Lista de canciones</h2>
      <hr className="block border-background-middlelight my-2" />
      <AlbumSongsList albumID={albumID} setAlbumSongsCount={setAlbumSongsCount} />
    </>
  );
}
