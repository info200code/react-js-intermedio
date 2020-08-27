import React from "react";
import { useQuery } from "../../utilities/hooks/use-query";
import Categories from "../Categories";
import SearchResults from "../SearchResults";

const GenericResults = () => {
  const query = useQuery();

  const search = query.get("search");
  if (search) {
    return <SearchResults value={search} />;
  }

  return <Categories />;
};

export default GenericResults;
