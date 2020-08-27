import React from "react";
import "./styles.css";
import { useTracks } from "../../utilities/hooks/use-track";

const TrackTitle = () => {
  const { currentTrack } = useTracks();

  return <p className="track-title">{currentTrack?.name}</p>;
};

export default TrackTitle;
