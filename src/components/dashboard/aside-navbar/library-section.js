import LinkLibrary from './library/link-library';

export default function LibrarySection({ ...props }) {
  return (
    <section {...props}>
      <h1 className="uppercase font-light text-secondary-dark text-xs pl-4 pr-5 mb-3">
        Tu biblioteca
      </h1>
      <LinkLibrary to="/dashboard/user-library/songs-like">Canciones que te gustan</LinkLibrary>
    </section>
  );
}
