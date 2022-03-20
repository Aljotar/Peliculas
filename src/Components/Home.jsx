import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="estilo-home">
      <FontAwesomeIcon className="m-4" icon={faHouse} />
      <Link to="/login">
        <p className="text-white">Iniciar Sesion</p>
      </Link>
      <Link to="/register">
        <p className="text-white">Registrarse</p>
      </Link>
      <div className="home-logo">
        <Image src="https://ww3.cuevana.pro/logo.png?1" />
      </div>
      <Link to="/search-page">
        <FontAwesomeIcon className="m-4" icon={faMagnifyingGlass} />
      </Link>
    </div>
  );
};
