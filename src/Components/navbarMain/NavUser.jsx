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
    <div className="d-flex align-items-center login-register">
      {!tokenLocal.token && (
        <span className="d-flex align-items-center navbar-log mx-2 d-none d-md-block ">
          <a
            href="/login"
            className={
              splitLocation[1] === "login"
                ? "link-active pe-2 ps-1 py-1"
                : "text-black pe-2 ps-1 py-1"
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
                : "text-black pe-2 ps-1 py-1"
            }
          >
            Registrarse
          </a>
          <Link to="/search-page">
              sdasdasdasdasd
          </Link>
        </span>
      )}
      {user.role === "admin" && (
        <NavDropdown
          className="d-flex align-items-center justify-content-center navbar-user mx-2 d-none d-md-block "
          id="nav-dropdown-ligth-example"
          title={<span className="text-black">Hola {user?.name} </span>}
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
      {!userEmpty && user.role !== "admin" && (
        <NavDropdown
          className="d-flex align-items-center navbar-user mx-2 d-none d-md-block"
          id="nav-dropdown-light-example"
          title={<span>Hola {user?.name} </span>}
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
    </div>
  );
};
