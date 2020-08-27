import React, { useEffect, useState } from "react";
import { useStore } from "../../utilities/hooks/use-store";

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

  return <div style={{ color: "#fff" }}>{JSON.stringify(categories)}</div>;
};

export default Cotegories;
