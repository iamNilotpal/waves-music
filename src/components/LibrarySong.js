export default function LibrarySong({
  song,
  setCurrentSong,
  currentStateSong,
  audioRef,
  isPlaying,
}) {
  const onActiveSongHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      !playPromise && playPromise.then(() => audioRef.current.play());
    }
  };

  return (
    <div
      className={
        currentStateSong === song ? 'library-song active-song' : 'library-song'
      }
      onClick={onActiveSongHandler}
    >
      <img src={song.cover} alt={song.name + 'cover photo'} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
