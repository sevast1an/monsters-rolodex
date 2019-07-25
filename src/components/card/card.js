import React from "react";
import "./card.css";

export const Card = ({ monster }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${monster.id}?set=set2&size=250x250`}
      alt="monster"
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
