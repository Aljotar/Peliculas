import React from "react";
import { Card, Container } from "react-bootstrap";
import { MovieFavorite } from "../Components/MovieFavorite";

function Favorite({ favorites, setFavorites }) {
  //fn limpia productos del favoritos
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="title-style my-2">Lista de deseos</h2>

        <button className="clean-cart my-2" onClick={clearFavorites}>
          Borrar
        </button>
      </div>
      {favorites.length === 1 ? (
        <Card className="no-results-card text-center text-dark-50 p-5 m-5">
          <Card.Title>Aún no tienes peliculas favoritas</Card.Title>
        </Card>
      ) : (
        <div>
          <div className="d-flex flex-wrap justify-content-center"></div>
          <MovieFavorite />
        </div>
      )}
    </Container>
  );
}

export default Favorite;
