import LibrarySong from './LibrarySong';

export default function Library({ songs, setCurrentSong, currentSong }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            currentSong={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            currentStateSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
}