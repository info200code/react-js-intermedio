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
      setPlaylists(data.items);
      setLoading(false);
    };

    getPlaylists();
  }, []);

  if (loading) {
    return <p style={{ color: "#fff" }}>loading playlists...</p>;
  }

  return (
    <Menu title="Playlists">
      {playlists.map((playlist) => (
        <Menu.Item
          key={playlist.id}
          to={`/users/${playlist.owner.id}/playlist/${playlist.id}`}
        >
          {playlist.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default PlayLists;
