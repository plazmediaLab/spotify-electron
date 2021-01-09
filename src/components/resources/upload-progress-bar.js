import { Line } from 'rc-progress';

export default function UploadProgressBar({ progress }) {
  return (
    progress > 0 && (
      <section className="text-sm text-center text-secondary-dark tracking-wider">
        <p className="mb-2">Subiendo archivo...</p>
        <Line
          percent={progress}
          trailWidth="2"
          trailColor="#494A4E"
          strokeWidth="2"
          strokeColor="#9b4dfa"
          strokeLinecap="square"
        />
      </section>
    )
  );
}
