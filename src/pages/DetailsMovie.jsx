import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Image, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function DetailsMovie({ caratulas }) {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovie(movieId) {
      setLoading(true);
      const response = await axios.get(
        `http://api.tvmaze.com/shows/${movieId}`
      );
      setMovie(response.data);
      setLoading(false);
    }
    getMovie(movieId);
  }, [movieId]);

  return (
    <div>
      {!loading ? (
        <Card className="m-2 card-details" style={{ width: "auto" }}>
          <Image
            className="p-0 card-imagen"
            variant=""
            src={movie.image.original}
          />
          <Card.Body className="bg-dark text-white">
            <h3 className="card-name m-0 p-0 text-center text-white">
              {movie.name}
            </h3>
            <p>Lenguaje: {movie.language} </p>
            <p>Genero: {movie.genres} </p>
            <p>Fecha de estreno: {movie.premiered} </p>
            <p>Sinopsis: {movie.summary} </p>


          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
