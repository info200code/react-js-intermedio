import React, { useState } from "react";
import Sound from "react-sound";
import PlayButton from "../PlayButton";
import Progress from "../ProgressBar";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import "./styles.css";
import { formatMilliseconds } from "../../utilities/formatMilliseconds";
import { useTracks } from "../../utilities/hooks/use-track";

const Player = () => {
  const {
    currentTrack,
    playStatus,
    isPlaying,
    togglePlay,
    handlePrevTrack,
    handleNexTrack,
    nextTrack,
    prevTrack,
  } = useTracks();
  const [progress, setProgress] = useState({
    position: 0,
  });

  const handleSongPlaying = (audio) => {
    setProgress({
      elapsed: formatMilliseconds(audio.position),
      total: formatMilliseconds(audio.duration),
      position: audio.position / audio.duration,
    });
  };

  const onPausePlay = () => {
    if (!currentTrack?.preview_url) return;

    togglePlay();
  };

  const onPrevTrack = () => {
    if (prevTrack) {
      handlePrevTrack();
    }
  };

  const onNextTrack = () => {
    if (nextTrack) {
      handleNexTrack();
    }
  };

  return (
    <div className="player">
      <div className="player-actions">
        <button onClick={onPrevTrack} className="player-action">
          <MdSkipPrevious />
        </button>
        <PlayButton onClick={onPausePlay} playing={isPlaying} />
        <button onClick={onNextTrack} className="player-action">
          <MdSkipNext />
        </button>
        <Sound
          url={currentTrack?.preview_url}
          playStatus={playStatus}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={() => {}}
        />
      </div>
      <div className="player-progress">
        <Progress progress={progress} />
      </div>
    </div>
  );
};

export default Player;
