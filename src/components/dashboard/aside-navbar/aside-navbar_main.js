import AsideNavLink from './aside-nav_link';

export default function AsideNavbarMain({ isAdmin }) {
  return (
    <aside className="text-secondary-dark flex flex-col pt-3">
      <nav className="flex-1">
        <AsideNavLink to="/dashboard">
          <span>Inicio</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </AsideNavLink>
        <AsideNavLink to="/dashboard/artists">
          <span>Artistas</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
        </AsideNavLink>
      </nav>
      {isAdmin && (
        <section>
          <p className="pl-5 pr-4 py-1 flex justify-between items-center hover:text-secondary cursor-pointer">
            <span>Nueva Canción</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 6v3m0 0v3m0-3h3M9 9H6M17 3v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <p className="pl-5 pr-4 py-1 flex justify-between items-center hover:text-secondary cursor-pointer">
            <span>Nueva Artista</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 6v3m0 0v3m0-3h3M9 9H6M17 3v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </section>
      )}
    </aside>
  );
}
