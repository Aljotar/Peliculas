import React from 'react'
import { NavLink } from 'react-router-dom';
import { Modal, Nav } from 'react-bootstrap';


//React Icons
import { VscClose } from 'react-icons/vsc';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { FaWrench } from 'react-icons/fa';

const NavbarMainMobile = ({ user, setShow, show }) => {
    const tokenLocal = leerDeLocalStorage('token') || {};
    const handleClose = () => setShow(false);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    return (
        <Modal show={show} onHide={handleClose} className="responsive-navbar text-white">
            <Modal.Header className="responsive-navbar-header">
                <button type="button" aria-label="Close" className="navbar-button mx-1" onClick={handleClose} ><VscClose /></button>
            </Modal.Header>
            {!tokenLocal.token
                &&
                <Modal.Header className="d-flex justify-content-evenly">
                    <a href="/login">
                        <button className="btn-general-style">Iniciar sesión</button>
                    </a>
                    <a href="/register">
                        <button   className="btn-general-style">Registrarse</button>
                    </a>
                </Modal.Header>
            }
            {user.role === 'admin' &&
                <Modal.Header className="d-flex flex-column bienvenido-user">
                    <p>Bienvenido Sr/a {user.name}</p>
                    <div>
                        <NavLink as={NavLink} to="/myProfile" onClick={handleClose}>
                            <button className="btn-general-style px-4" >Mi Perfil</button>
                        </NavLink>
                        <button onClick={logout} className="btn-general-style">Cerrar Sesion</button>
                    </div>
                </Modal.Header>
            }
            {/* si esta registrado un usuario admin entonces se muestra */}
            {user.role === 'user'
                &&
                <Modal.Header className="d-flex flex-column bienvenido-user text-white">
                    <p>Bienvenido Sr/a {user.name}</p>
                    <div className="d-flex justify-content-evenly">
                        <NavLink  as={NavLink} to="/myProfile" onClick={handleClose} >
                            <button className="btn-general-style px-4">Mi Perfil</button>
                        </NavLink>
                        <button onClick={logout} className="btn-general-style p-1">Cerrar Sesion</button>
                    </div>
                </Modal.Header>
            }
            <Modal.Body >
                <div className="responsive-navbar-links text-center text-white">
                    {user.role === 'admin' &&      
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/adminBoard" activeClassName="link-active"><FaWrench className="mb-1 me-2" />ADMIN BOARD</Nav.Link>
                    </li>
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default NavbarMainMobile