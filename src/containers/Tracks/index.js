import React, { useEffect, useState } from "react";
import { useStore } from "../../utilities/hooks/use-store";
import { useTracks } from "../../utilities/hooks/use-track";
import { useParams } from "react-router-dom";
import PlaylistCard from "../../components/PlaylistCard";
import TracksGrid from "../../components/TracksGrid";

const Tracks = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState({});
  const [loading, setLoading] = useState(true);

  const { service } = useStore();
  const { setTracks } = useTracks();

  useEffect(() => {
    const getData = async () => {
      const playlistData = await service.getSinglePlaylist(id);
      const tracksData = await service.getTracks(id);

      setPlaylist(playlistData);
      setTracks(tracksData?.items?.map(({ track }) => track));
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <PlaylistCard playtlist={playlist} />
      <TracksGrid />
    </div>
  );
};

export default Tracks;
