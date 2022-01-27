import { useState } from 'react';
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Player({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
}) {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const onPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdateHandler = (e) => {
    const { currentTime, duration } = e.target;
    setSongInfo({
      ...songInfo,
      currentTime,
      duration: duration || 0,
    });
  };

  const onAudioDragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const formatTime = (time) =>
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);

  const onSkipHandler = async (skip) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (skip === 'skip-backward') {
      const prevSongIndex =
        currentIndex - 1 >= 0 ? currentIndex - 1 : songs.length - 1;
      const prevSong = songs[prevSongIndex];
      await setCurrentSong(prevSong);
    } else {
      const nextSongIndex =
        currentIndex + 1 <= songs.length - 1 ? currentIndex + 1 : 0;
      const nextSong = songs[nextSongIndex];
      await setCurrentSong(nextSong);
    }

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      !playPromise && playPromise.then(() => audioRef.current.play());
    }
  };

  return (
    <div className="player">
      <div className="time-controller">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={onAudioDragHandler}
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FaAngleLeft size={40} onClick={() => onSkipHandler('skip-backward')} />
        {isPlaying ? (
          <FaPause className="play" size={40} onClick={onPlayHandler} />
        ) : (
          <FaPlay className="play" size={40} onClick={onPlayHandler} />
        )}
        <FaAngleRight size={40} onClick={() => onSkipHandler('skip-forward')} />
      </div>

      <audio
        onTimeUpdate={onTimeUpdateHandler}
        onLoadedMetadata={onTimeUpdateHandler}
        ref={audioRef}
        src={currentSong.audioUrl}
      ></audio>
    </div>
  );
}
