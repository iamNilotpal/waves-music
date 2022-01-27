import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import data from './utils/data';
import './styles/App.scss';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
