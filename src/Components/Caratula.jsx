import { Card, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";

import "./caratula.css";

export default function Caratula({ caratula, favorites, setFavorites }) {
  const [isFavorites, setIsFavorites] = useState(false);

  const { name, id, image, rating } = caratula;
  const history = useHistory();
  function redirect() {
    history.push(`/search-page/${id}`);
  }

  function getRating() {
    const scoreRating = rating.average;
    const stars = Math.ceil(scoreRating / 2);
    const starsArray = [];

    for (let index = 0; index < stars; index++) {
      starsArray.push(<IoStarSharp />);
    }
    return starsArray;
  }

  return (
    <>
      <Card
        onClick={() => redirect()}
        className="m-2 card-estilo"
        style={{ width: "10rem" }}
      >
        <Image className="p-0 card-imagen" variant="" src={image.original} />
        <h3 className="card-name m-0 p-0 text-center text-white">{name}</h3>
        <div className="stars">{getRating()}</div>
      </Card>
    </>
  );
}
