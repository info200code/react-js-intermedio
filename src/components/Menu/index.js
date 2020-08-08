import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const MenuItem = ({ children, to }) => {
  return (
    <li className="menu-item">
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Menu = ({ title, children }) => {
  return (
    <div className="menu-container">
      <header className="menu-title">{title}</header>
      <ul>{children}</ul>
    </div>
  );
};

Menu.Item = MenuItem;

export default Menu;
