import React from "react";
import Sound from "react-sound";
import PlayButton from "../PlayButton";
import Progress from "../ProgressBar";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import "./styles.css";

const Player = () => {
  return (
    <div className="player">
      <div className="player-actions">
        <button className="player-action">
          <MdSkipPrevious />
        </button>
        <PlayButton onClick={() => alert(123)} playing={false} />
        <button className="player-action">
          <MdSkipNext />
        </button>
      </div>
      <div className="player-progress">
        <Progress progress={{}} />
      </div>
    </div>
  );
};

export default Player;
