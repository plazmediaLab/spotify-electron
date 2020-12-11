import coversWallpaper from 'img/albums-covers-wallpaper.jpg';
import Platifylogo from 'img/SVG/platify-white.svg';
import { useState } from 'react';
import SwitchView from './switc-view';

export default function InitPage() {
  const [show, setShow] = useState(null);

  return (
    <main className="h-screen grid place-items-center relative mx-auto bg-transparent text-secondary">
      <section className="bg-background-dark w-6/12 md:w-4/12 z-10 relative p-10 rounded-2xl shadow-2xl">
        <img src={Platifylogo} alt="Platify logo" className="h-14 mx-auto mb-8" />
        <SwitchView show={show} setShow={setShow} />
      </section>
      <div
        className="w-full h-screen bg-opacity-50 absolute top-0 left-0"
        style={{ backgroundColor: 'rgba(0,0,0, 0.35)', zIndex: '1' }}
      />
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-screen opacity-50"
        style={{
          backgroundImage: 'url(' + coversWallpaper + ')',
          filter: 'blur(2.5px)'
        }}></div>
    </main>
  );
}
