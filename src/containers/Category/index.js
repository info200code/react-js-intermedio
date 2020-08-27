import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useStore } from "../../utilities/hooks/use-store";
import CardList from "../../components/CardList";

const Category = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { service } = useStore();

  useEffect(() => {
    const getData = async () => {
      const categoryData = await service.getCategories(id);
      const playlistsData = await service.getPlaylistByCategory(id);
      setCategory(categoryData);
      setPlaylists(playlistsData.playlists.items);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2 className="category-title">{category.name}</h2>
      <CardList>
        {playlists.map((playlist) => (
          <CardList.Card
            key={playlist.id}
            to={`/tracks/${playlist.id}`}
            cover={playlist?.images[0]?.url}
            title={playlist?.name}
          />
        ))}
      </CardList>
    </div>
  );
};

export default Category;
