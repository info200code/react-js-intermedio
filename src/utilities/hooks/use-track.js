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
  const [prevTrack, setPrevTrack] = useState();
  const [nextTrack, setNextTrack] = useState();

  const togglePlay = () => {
    if (playStatus === Sound.status.PLAYING) {
      return setPlayStatus(Sound.status.PAUSED);
    }

    setPlayStatus(Sound.status.PLAYING);
  };

  const setTrack = (track) => {
    setPlayStatus(Sound.status.PLAYING);
    setCurrentTrack(track);

    const index = tracks.findIndex((_track) => _track.id === track.id);
    if (index > 0) {
      const prevTrack = tracks[index - 1];
      setPrevTrack(prevTrack);
    } else {
      setPrevTrack(null);
    }

    if (index < tracks.length - 1) {
      const nextTrack = tracks[index + 1];
      setNextTrack(nextTrack);
    } else {
      setNextTrack(null);
    }
  };

  const handleCurrentTrack = (track) => {
    setTrack(track);
  };

  const handlePrevTrack = () => {
    setTrack(prevTrack);
  };

  const handleNexTrack = () => {
    setTrack(nextTrack);
  };

  return {
    tracks,
    setTracks,
    currentTrack,
    handleCurrentTrack,
    togglePlay,
    isPlaying: playStatus === Sound.status.PLAYING,
    playStatus,
    handlePrevTrack,
    handleNexTrack,
    nextTrack,
    prevTrack,
  };
};

export const useTracks = () => useContext(TrackContext);
