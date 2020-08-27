import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Card = ({ cover, title, to }) => {
  return (
    <div className="card-item">
      <Link to={to}>
        <img className="card-cover" src={cover} />
      </Link>
      <p className="card-title">
        <Link to={to}>{title}</Link>
      </p>
    </div>
  );
};

export default Card;
