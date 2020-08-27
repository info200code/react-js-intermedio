import React from "react";
import { User, SearchField } from "../../components";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import TracksByUser from "../TracksByUser";
import GenericResults from "../GenericResults";
import Category from "../Category";

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
            <TracksByUser />
          </Route>
          <Route path="/category/:id" component={Category} />
          <Route path="/" exact component={GenericResults} />
        </Switch>
      </div>
    </div>
  );
};

export default Browse;
