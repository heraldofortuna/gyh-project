import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={title}/>
      <h3 className="card__title">{title}</h3>
    </div>
  )
};

export default Card;
