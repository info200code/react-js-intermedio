import React from "react";
import { Menu } from "../../components";
import "./styles.css";

const Home = () => {
  return (
    <div className="container">
      <div className="browse-wrapper">
        <div className="playlist-wrapper">
          <Menu title="main">
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </div>
        <div className="body-wrapper">
          {/* agregar 2 rutas
            1. /users -> un componente diferente 
            2. /category -> un componente diferente 
          */}
        </div>
      </div>
      <div className="player-wrapper"></div>
    </div>
  );
};

export default Home;
