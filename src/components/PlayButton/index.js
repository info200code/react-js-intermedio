import React from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import "./styles.css";

const PlayButton = ({ playing, onClick }) => {
  return (
    <button className="play-button" onClick={onClick}>
      {playing ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
    </button>
  );
};

export default PlayButton;
