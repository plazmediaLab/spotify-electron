import { Router } from '@reach/router';
import InitContent from 'components/dashboard/content/init-content';
import ArtistsContent from 'components/dashboard/content/artists-content';
import UserOptions from './user-options';

export default function InitContentMain() {
  return (
    <div>
      <Router>
        <InitContent path="*" />
        <ArtistsContent path="artists" />
        <UserOptions path="options" />
      </Router>
    </div>
  );
}
