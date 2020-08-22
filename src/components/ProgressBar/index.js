import React from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const { elapsed, position, total } = progress;

  return (
    <div className="progress">
      <span className="player_time-elapsed">{elapsed}</span>
      <progress value={position} max="1"></progress>
      <span className="player_time-total">{total}</span>
    </div>
  );
};

export default ProgressBar;
