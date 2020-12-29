import { Router } from '@reach/router';
import InitContent from 'components/dashboard/content/init-content';
import ArtistsContent from 'components/dashboard/content/artists-content';
import UserOptions from './user-options';
import ArtistParamContent from './artist-param-content';

export default function InitContentMain() {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Router>
        <InitContent path="*" />
        <ArtistsContent path="artists" />
        <ArtistParamContent path="artist/:artistID" />
        <UserOptions path="options" />
      </Router>
    </div>
  );
}
