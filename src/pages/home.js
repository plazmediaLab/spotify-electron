import coversWallpaper from 'img/albums-covers-wallpaper.jpg';
import Platifylogo from 'img/SVG/platify-white.svg';

export default function Home({ children }) {
  return (
    <div className="h-screen grid place-items-center mx-auto bg-transparent">
      <section className="bg-background-dark w-10/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-2/6 2xl:w-1/5 z-10 relative p-8 rounded-2xl shadow-container">
        <img src={Platifylogo} alt="Platify logo" className="h-14 mx-auto mb-8" />
        {children}
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
    </div>
  );
}
