import React from "react";
import "./styles.css";

const TrackTitle = () => {
  const currentTrack = { name: "musica 1" };
  return <p className="track-title">{currentTrack?.name}</p>;
};

export default TrackTitle;
