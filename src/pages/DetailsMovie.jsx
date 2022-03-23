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
        `https://api.tvmaze.com/shows/${movieId}`
      );
      setMovie(response.data);
      setLoading(false);
    }
    getMovie(movieId);
  }, [movieId]);

  return (
    <div>
      {!loading ? (
        <Card className="m-2 card-estilo" style={{ width: "15rem" }}>
          <Image className="p-0 card-imagen" variant="" src={movie.image.original}/>
          <h3 className="card-name m-0 p-0 text-center text-white">
            {movie.name}
          </h3>
        </Card>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
