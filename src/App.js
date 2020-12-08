import firebase from 'utils/Firebase';
import 'firebase/auth';

function App() {
  firebase.auth().onAuthStateChanged((currentUser) => {
    console.log(currentUser ? 'User logged' : 'Unauthorized');
  });

  return (
    <div className="container mx-auto py-3 px-5 bg-white mt-5 rounded-md bg-background text-secondary">
      <h1>Create react app - Spotify</h1>
      <p>Test</p>
    </div>
  );
}

export default App;
