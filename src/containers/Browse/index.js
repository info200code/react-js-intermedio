import React from "react";
import { User, SearchField } from "../../components";
import "./styles.css";
import { Switch, Route } from "react-router-dom";

const Browse = () => {
  return (
    <div className="browse-container">
      <header className="browse-header">
        <SearchField placeholder="Buscar..." />
        <User />
      </header>
      <div className="browse-body">
        <Switch>
          <Route path="/users/:user/playlist/:playlistId">
            <div style={{ color: "#fff" }}>
              {JSON.stringify({ data: "playlist" })}
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Browse;
