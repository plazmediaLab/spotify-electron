import AlbumOnPlaySection from './album-on-play-section';
import PlayerSection from './player-section';
import VolumenSection from './volumen-section';

export default function PlayerSectionMain() {
  return (
    <section className="grid place-items-center w-full h-full px-5">
      <main className="w-full flex gap-x-4">
        <AlbumOnPlaySection className="bg-pink-500 " />
        <PlayerSection className="flex-1 bg-blue-500" />
        <VolumenSection className="bg-purple-500" />
      </main>
    </section>
  );
}
