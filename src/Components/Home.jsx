import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="estilo-home">
      <FontAwesomeIcon className="m-4" icon={faHouse} />
      <Image src="https://ww3.cuevana.pro/logo.png?1"/>
      <Link to="/search-page">
        <FontAwesomeIcon className="m-4" icon={faMagnifyingGlass} />
      </Link>
    </div>
  );
};
