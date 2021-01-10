import AlbumOnPlaySection from './album-on-play-section';
import PlayerSection from './player-section';
import VolumenSection from './volumen-section';

export default function PlayerSectionMain() {
  return (
    <section className="grid place-items-center w-full h-full px-5">
      <main className="w-full flex gap-x-6 md:gap-x-8 xl:gap-x-24 ">
        <AlbumOnPlaySection
          className="flex gap-x-2 items-center tracking-wider"
          style={{ minWidth: '140px' }}
        />
        <PlayerSection className="flex-1 grid place-items-center" />
        <VolumenSection className="flex gap-x-2 items-center" />
      </main>
    </section>
  );
}
