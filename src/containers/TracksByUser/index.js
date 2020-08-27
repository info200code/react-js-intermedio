import React, { useEffect, useState } from "react";
import PlaylistCard from "../../components/PlaylistCard";
import { useStore } from "../../utilities/hooks/use-store";
import { useParams } from "react-router-dom";
import TracksGrid from "../../components/TracksGrid";
import { useTracks } from "../../utilities/hooks/use-track";

const TracksByUser = () => {
  const { playlistId, user } = useParams();
  const { service } = useStore();
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState({});
  const { setTracks } = useTracks();

  useEffect(() => {
    const getData = async () => {
      const playlistData = await service.getPlaylistByUser(user, playlistId);
      const tracksData = await service.getTracksByUser(user, playlistId);

      setPlaylist(playlistData);
      setTracks(tracksData.items?.map(({ track }) => track));
      setLoading(false);
    };

    getData();
  }, [playlistId, user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PlaylistCard playtlist={playlist} />
      <TracksGrid />
    </div>
  );
};

export default TracksByUser;
