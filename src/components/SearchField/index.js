import React, { useEffect, useState } from "react";
import querystring from "querystring";
import "./styles.css";
import { useHistory } from "react-router-dom";

const SearchField = (props) => {
  const history = useHistory();
  const [value, setValue] = useState("");

  useEffect(() => {
    const query = querystring.stringify({ search: value.trim() });
    let url = "/";

    if (value) {
      url = `/?${query}`;
    }

    history.push(url);
  }, [value]);

  return (
    <input
      className="search-field"
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

export default SearchField;
