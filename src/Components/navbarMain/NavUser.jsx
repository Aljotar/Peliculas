import React from "react";
import { NavDropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { FaShareSquare, FaWrench } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const NavUser = ({ tokenLocal, splitLocation, user, logout }) => {
  const userEmpty =
    user &&
    Object.keys(user).length === 0 &&
    Object.getPrototypeOf(user) === Object.prototype;

  return (
    <div className="login-register">
      {!tokenLocal.token && (
        <span className="d-flex mx-2 mt-3 d-none d-md-block text-white">
          <a
            href="/login"
            className={
              splitLocation[1] === "login"
                ? "link-active pe-2 ps-1 py-1"
                : "text-white pe-2 ps-1 py-1"
            }
          >
            Iniciar sesión
          </a>
          <span>/</span>
          <a
            href="/register"
            className={
              splitLocation[1] === "register"
                ? "link-active pe-2 ps-1 py-1"
                : "text-white pe-2 ps-1 py-1"
            }
          >
            Registrarse
          </a>
        </span>
      )}
      {user.role === "admin" && (
        <NavDropdown
          className="d-flex align-items-center justify-content-end navbar-user mx-2 d-none d-md-block "
          id="nav-dropdown-ligth-example"
          title={<span className="text-black">Hola {user.name} </span>}
          menuVariant="ligth"
        >
          <NavDropdown.Item
            className="text-center"
            as={NavLink}
            to="/myProfile"
          >
            <CgProfile className="mb-1" /> Mi perfil
          </NavDropdown.Item>
          <NavDropdown.Item
            className="text-center"
            as={NavLink}
            to="/adminBoard"
          >
            <FaWrench className="mb-1" /> Admin Board
          </NavDropdown.Item>
          <NavDropdown.Divider />
          {tokenLocal.token && (
            <NavDropdown.Item className="text-center" onClick={logout}>
              <FaShareSquare className="mb-1" /> Cerrar sesión
            </NavDropdown.Item>
          )}
        </NavDropdown>
      )}
      {!userEmpty && user.role === "user" && (
        <NavDropdown
          className="d-flex align-items-center navbar-user mx-2 d-none d-md-block"
          id="nav-dropdown-light-example"
          title={<span>Hola {user.name} </span>}
          menuVariant="light"
        >
          <NavDropdown.Item
            className="text-center"
            as={NavLink}
            to="/myProfile"
          >
            <CgProfile className="mb-1" /> Mi perfil
          </NavDropdown.Item>
          <NavDropdown.Divider />
          {tokenLocal.token && (
            <NavDropdown.Item className="text-center" onClick={logout}>
              <FaShareSquare className="mb-1" /> Cerrar sesión
            </NavDropdown.Item>
          )}
        </NavDropdown>
      )}
      <Link to="/search-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.995"
          height="27"
          viewBox="0 0 26.995 27"
          className="mx-5 mt-3 svg-nav"
        >
          <path
            id="search-solid"
            d="M26.628,23.343l-5.257-5.257a1.265,1.265,0,0,0-.9-.369h-.859a10.963,10.963,0,1,0-1.9,1.9v.859a1.265,1.265,0,0,0,.369.9l5.257,5.257a1.26,1.26,0,0,0,1.788,0l1.492-1.492A1.271,1.271,0,0,0,26.628,23.343ZM10.968,17.717a6.749,6.749,0,1,1,6.749-6.749A6.745,6.745,0,0,1,10.968,17.717Z"
            fill="#fff"
          />
        </svg>
      </Link>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33.435"
          height="26"
          viewBox="0 0 33.435 26"
          className="mx-5 mt-3 svg-nav1"
        >
          <path
            id="home-solid"
            d="M16.259,38.8l-10.7,8.814v9.513a.929.929,0,0,0,.929.929l6.5-.017a.929.929,0,0,0,.924-.929V51.549a.929.929,0,0,1,.929-.929h3.715a.929.929,0,0,1,.929.929V57.1a.929.929,0,0,0,.929.932l6.5.018a.929.929,0,0,0,.929-.929V47.6L17.147,38.8a.708.708,0,0,0-.888,0Zm16.9,5.991-4.852-4V32.747a.7.7,0,0,0-.7-.7h-3.25a.7.7,0,0,0-.7.7v4.214l-5.2-4.275a2.786,2.786,0,0,0-3.541,0L.237,44.786a.7.7,0,0,0-.093.981l1.48,1.8a.7.7,0,0,0,.981.095L16.259,36.415a.708.708,0,0,1,.888,0L30.8,47.66a.7.7,0,0,0,.981-.093l1.48-1.8a.7.7,0,0,0-.1-.983Z"
            transform="translate(0.015 -32.05)"
            fill="#fff"
          />
        </svg>
      </Link>
    </div>
  );
};
