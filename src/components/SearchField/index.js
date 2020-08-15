import React from "react";
import "./styles.css";

const SearchField = (props) => {
  return (
    <input
      className="search-field"
      onChange={(e) => console.log(e.target.value)}
      {...props}
    />
  );
};

export default SearchField;
