import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";

export const TheNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav-estilo">
        <Container>
        <div className="d-flex">
          <Link to="/login">
            <p className="text-white mx-3">Iniciar Sesion</p>
          </Link>
          <Link to="/register">
            <p className="text-white mx-3">Registrarse</p>
          </Link>
          </div>
          <div>
            <Link to="/">
              <FontAwesomeIcon className="m-4" icon={faHouse} />
            </Link>
            <Link to="/search-page">
              <FontAwesomeIcon className="m-4" icon={faMagnifyingGlass} />
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
