import React from "react";
import { User, SearchField } from "../../components";
import "./styles.css";

const Browse = () => {
  return (
    <div className="browse-container">
      <header className="browse-header">
        <SearchField placeholder="Buscar..." />
        <User />
      </header>
      <div className="browse-body">
        <p style={{ color: "#fff" }}>datos</p>
      </div>
    </div>
  );
};

export default Browse;
