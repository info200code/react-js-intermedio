import React from "react";
import "./styles.css";

const PlaylistCard = ({ playtlist }) => {
  return (
    <div className="playlist-card">
      <img className="playlist-card-cover" src={playtlist?.images[0].url} />
      <div className="playlist-card-info">
        <h2>{playtlist.name}</h2>
        <p>{playtlist.description}</p>
        <p>{playtlist.followers.total} Seguidores</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
