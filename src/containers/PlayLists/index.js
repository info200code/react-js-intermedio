import React, { useState, useEffect } from "react";
import { useStore } from "../../utilities/hooks/use-store";
import { Menu } from "../../components";

const PlayLists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { service } = useStore();

  // cuando se monta
  // cuando está montado y cambió
  // cuando se desmonta

  useEffect(() => {
    const getPlaylists = async () => {
      const data = await service.getPlaylists();
      setPlaylists(data);
      setLoading(false);
    };

    getPlaylists();
  }, []);

  if (loading) {
    return <p style={{ color: "#fff" }}>loading playlists...</p>;
  }

  console.log(playlists);
  return (
    <Menu title="Playlists">
      <Menu.Item to="/">Playlist 1</Menu.Item>
    </Menu>
  );
};

export default PlayLists;
