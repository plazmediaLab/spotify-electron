import SongsListTable from 'components/resources/songs-list-table';

export default function LibrarySongsLike() {
  return (
    <section className="px-5 py-4">
      <h1 className="text-3xl tracking-wider">Canciones que te gustan</h1>
      <hr className="block border-background-middlelight my-2" />
      <SongsListTable />
    </section>
  );
}
