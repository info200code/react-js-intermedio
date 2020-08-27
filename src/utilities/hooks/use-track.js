import React, { useState, useContext, createContext } from "react";
import Sound from "react-sound";
const TrackContext = createContext({});

export const TrackProvider = ({ children }) => {
  const tracksProvider = useTrackProvider();

  return (
    <TrackContext.Provider value={tracksProvider}>
      {children}
    </TrackContext.Provider>
  );
};

const useTrackProvider = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

  const togglePlay = () => {
    if (playStatus === Sound.status.PLAYING) {
      return setPlayStatus(Sound.status.PAUSED);
    }

    setPlayStatus(Sound.status.PLAYING);
  };

  const handleCurrentTrack = (track) => {
    setPlayStatus(Sound.status.PLAYING);
    setCurrentTrack(track);
  };

  return {
    tracks,
    setTracks,
    currentTrack,
    handleCurrentTrack,
    togglePlay,
    isPlaying: playStatus === Sound.status.PLAYING,
  };
};

export const useTracks = () => useContext(TrackContext);
