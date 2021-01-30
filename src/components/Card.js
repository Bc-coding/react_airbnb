import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ src, title, desc, price, href }) {
  return (
    <div className="card">
      <Link className="card__imgWrapper" to="/homes" target="__blank">
        <img src={src} alt="" className="card__img" />
      </Link>

      <div className="card__info">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Card;
