import React from "react";
import "./styles.css";

export const MenuItem = ({ children, to }) => {
  return (
    <li>
      <a href="/">{children}</a>
    </li>
  );
};

const Menu = ({ title, children }) => {
  return (
    <div clasName="menu-container">
      <header className="menu-title">{title}</header>
      <ul>{children}</ul>
    </div>
  );
};

Menu.Item = MenuItem;

export default Menu;
