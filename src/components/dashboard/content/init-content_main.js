import { Router } from '@reach/router';
import InitContent from 'components/dashboard/content/init-content';
import ArtistsContent from 'components/dashboard/content/artists-content';
import UserOptions from './user-options';
import ArtistParamContent from './artist-param-content';
import AlbumParamContent from './album-param-content';
import AlbumsContent from './albums-content';

export default function InitContentMain() {
  return (
    <div className="overflow-y-auto overflow-x-hidden custom-scroll">
      <Router>
        <InitContent path="*" />
        <ArtistsContent path="artists" />
        <AlbumsContent path="albums" />
        <ArtistParamContent path="artist/:artistID" />
        <AlbumParamContent path="album/:albumID" />
        <UserOptions path="options" />
      </Router>
    </div>
  );
}
