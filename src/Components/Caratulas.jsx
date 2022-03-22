import Caratula from "./Caratula";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import React, { useState } from "react";

export default function Caratulas( {caratulas, loading} ) {
  

  const [caratula, setCaratulas] = useState(caratulas);
  
  const [busqueda, setbusqueda] = useState("");

  const handleChange = (e) => {
    setbusqueda(e.target.value);
    filtar(e.target.value);
  };

  const filtar = (terminoBusqueda) => {
    let resultadoBusqueda = caratula.filter((elemento) => {
      if (elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    setCaratulas(resultadoBusqueda);
  };

  const mapCaratulas = caratula.map((noti, i) => (
    <Caratula key={noti.id} caratula={noti} />
    
  ));

  return (
    <div className="principal p-0">
      {loading ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h2 className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-tv mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
            </svg>
            Peliculas
          </h2>{" "}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar Películas y series.."
              className="m-0"
              aria-label="Search"
              value={busqueda}
              onChange={handleChange}
            />
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Form>
          <div className="d-flex flex-wrap justify-content-center">
            {mapCaratulas}
          </div>
        </>
      )}
    </div>
  );
}
