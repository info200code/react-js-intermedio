import React, { useEffect, useState } from "react";
import PlaylistCard from "../../components/PlaylistCard";
import { useStore } from "../../utilities/hooks/use-store";
import { useParams } from "react-router-dom";
import TracksGrid from "../../components/TracksGrid";

const TracksByUser = () => {
  const { playlistId, user } = useParams();
  const { service } = useStore();
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState({});
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const playlistData = await service.getPlaylistByUser(user, playlistId);
      const tracksData = await service.getTracksByUser(user, playlistId);

      setPlaylist(playlistData);
      setTracks(tracksData.items);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PlaylistCard playtlist={playlist} />
      <TracksGrid tracks={tracks} />
    </div>
  );
};

export default TracksByUser;
