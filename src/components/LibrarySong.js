export default function LibrarySong({
  currentSong,
  setCurrentSong,
  currentStateSong,
}) {
  return (
    <div
      className={
        currentStateSong === currentSong
          ? 'library-song active-song'
          : 'library-song'
      }
      onClick={() => setCurrentSong(currentSong)}
    >
      <img src={currentSong.cover} alt={currentSong.name + 'cover photo'} />
      <div className="song-description">
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
}
