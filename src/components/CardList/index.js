import React from "react";
import "./styles.css";
import Card from "../Card";

const CardList = ({ children }) => {
  return <div className="card-list">{children}</div>;
};

CardList.Card = Card;

export default CardList;
