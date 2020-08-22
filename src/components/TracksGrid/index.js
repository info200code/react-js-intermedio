import React from "react";
import PlayButton from "../PlayButton";
import "./styles.css";

const Row = ({ track, active }) => {
  let classes = "track-row";
  if (active) {
    classes = `${classes} active`;
  }

  return (
    <tr className={classes}>
      <td>
        <PlayButton playing={false} onClick={() => alert(track.name)} />
      </td>
      <td>{track?.name}</td>
      <td>{track?.artists[0]?.name}</td>
      <td>{track?.album?.name}</td>
    </tr>
  );
};

const TracksGrid = ({ tracks }) => {
  console.log(tracks);
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
        {tracks.map(({ track }) => (
          <Row key={track.id} track={track} />
        ))}
      </tbody>
    </table>
  );
};

export default TracksGrid;
