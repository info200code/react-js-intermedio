import React from "react";
import PlayButton from "../PlayButton";
import "./styles.css";
import { useTracks } from "../../utilities/hooks/use-track";

const Row = ({ track, active, isPlaying, onClick }) => {
  let classes = "track-row";
  if (active) {
    classes = `${classes} active`;
  }

  return (
    <tr className={classes}>
      <td>
        <PlayButton playing={active && isPlaying} onClick={onClick} />
      </td>
      <td>{track?.name}</td>
      <td>{track?.artists[0]?.name}</td>
      <td>{track?.album?.name}</td>
    </tr>
  );
};

const TracksGrid = () => {
  const {
    tracks,
    currentTrack,
    togglePlay,
    handleCurrentTrack,
    isPlaying,
  } = useTracks();

  const onClick = (track) => {
    if (currentTrack && track.id === currentTrack?.id) {
      togglePlay();
    } else {
      handleCurrentTrack(track);
    }
  };

  return (
    <table className="tracks-grid">
      <thead>
        <tr>
          <th></th>
          <th>Track</th>
          <th>Artista</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => (
          <Row
            key={track.id}
            track={track}
            onClick={() => onClick(track)}
            active={currentTrack?.id === track.id}
            isPlaying={isPlaying}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TracksGrid;
