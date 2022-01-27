import { FaPlay, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Player() {
  return (
    <div className="player">
      <div className="time-controller">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>

      <div className="play-control">
        <FaAngleLeft size={40} />
        <FaPlay className="play" size={40} />
        <FaAngleRight size={40} />
      </div>
    </div>
  );
}
