import React, { useEffect, useState } from "react";
import { useStore } from "../../utilities/hooks/use-store";
import CardList from "../../components/CardList";

const Cotegories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { service } = useStore();

  useEffect(() => {
    const getData = async () => {
      const data = await service.getCategories();
      setCategories(data.categories.items);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <CardList>
      {categories.map((category) => (
        <CardList.Card
          key={category.id}
          to={`/category/${category.id}`}
          title={category.name}
          cover={category?.icons[0]?.url}
        />
      ))}
    </CardList>
  );
};

export default Cotegories;
