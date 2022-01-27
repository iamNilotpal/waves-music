import LibrarySong from './LibrarySong';

export default function Library({
  songs,
  setCurrentSong,
  currentSong,
  audioRef,
  isPlaying,
  libraryStatus,
}) {
  return (
    <div className={`library${libraryStatus ? ' active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            currentStateSong={currentSong}
            songs={songs}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}
