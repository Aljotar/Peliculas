import Caratula from "./Caratula";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import React from "react";

export default function Caratulas({props}) {
  const [caratulas, setCaratulas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const request = async () => {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=Animation`
      );
      const info = response.data;
      console.log(info);
      setCaratulas(info);
      setLoading(false);
    };
    request();
  }, [pagina]);

  const clickPagina = () => {
    setPagina(pagina - 1);
  };

  const mapCaratulas = caratulas.map((noti, i) => (
    <Caratula key={noti.id} caratula={noti} />
  ));

  const anteriorDisabled = pagina === 1;
  return (
    <div className="principal p-0">
      {loading ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h2 className="text-white"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-tv mx-2"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
        </svg>Peliculas</h2>
          <div className="d-flex flex-wrap">{mapCaratulas}</div>
          <Button
            variant="outline-success"
            className="mx-5 m-5"
            onClick={clickPagina}
            disabled={anteriorDisabled}
          >
            Anterior
          </Button>
          <Button
            variant="outline-success"
            className="m-5"
            onClick={() => {
              setPagina(pagina + 1);
            }}
            disabled={caratulas.length === 0}
          >
            Siguiente
          </Button>
        </>
      )}
    </div>
  );
}
