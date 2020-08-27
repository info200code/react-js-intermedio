import React, { useEffect, useState } from "react";
import "./styles.css";
import { useTracks } from "../../utilities/hooks/use-track";
import CardList from "../../components/CardList";
import { useStore } from "../../utilities/hooks/use-store";
import TracksGrid from "../../components/TracksGrid";

const SearchResults = ({ value }) => {
  const [loading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  const { service } = useStore();
  const { setTracks } = useTracks();

  useEffect(() => {
    const getData = async () => {
      const res = await service.search(value);
      setPlaylists(res?.playlists?.items || []);
      setTracks(res?.tracks?.items || []);
      setLoading(false);
    };

    getData();
  }, [value]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="search-results">
      <h2 className="search-results-title">
        Monstrando resutlados para {value}
      </h2>
      <CardList>
        {playlists.map((playlist) => (
          <CardList.Card
            key={playlist.id}
            to={`/tracks/${playlist.id}`}
            title={playlist.name}
            cover={playlist?.images[0]?.url}
          />
        ))}
      </CardList>
      <TracksGrid />
    </div>
  );
};

export default SearchResults;
