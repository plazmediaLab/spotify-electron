export default function AlbumOnPlaySection({ ...props }) {
  return (
    <section {...props}>
      <div
        className="w-18 min-w-18 h-18 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/albums%2F20a28a4b-bcd7-4753-80dc-350cae8bc6a6?alt=media&token=65651c22-a7fc-4895-a739-412d6f7e64c6)`
        }}></div>
      <div className="max-w-18x3">
        <p className="text-md leading-5">Quisiera saber (whit Natalia Lafourcade) - (En vivo)</p>
        <p className="text-xs text-secondary-dark">Los Daniels</p>
      </div>
    </section>
  );
}
