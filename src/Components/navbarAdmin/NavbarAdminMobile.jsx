import React from 'react'
import { NavLink } from 'react-router-dom';
import { Modal, Nav } from 'react-bootstrap';

//React Icons
import { VscClose } from 'react-icons/vsc';
import { RiArrowGoBackLine } from 'react-icons/ri';

const NavbarAdminMobile = (props) => {
    const { setShow, show, user } = props;
    const handleClose = () => setShow(false);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    return (
        <Modal show={show} onHide={handleClose} className="responsive-navbar text-dark">
            <Modal.Header className="responsive-navbar-header">
                <button type="button" aria-label="Close" className="navbar-button" onClick={handleClose} >
                    <VscClose />
                </button>
            </Modal.Header>
            <Modal.Header className="d-flex flex-column bienvenido-user">
                <p>Administrador {user.name}</p>
                <div className="d-flex justify-content-evenly">
                    <NavLink as={NavLink} to="/profileAdmin">
                        <button className="btn-general-style px-4">Mi Perfil</button>
                    </NavLink>
                    <button onClick={logout} className="btn-general-style p-1">Cerrar Sesion</button>
                </div>
            </Modal.Header>
            <Modal.Body >
                <div className="responsive-navbar-links text-center ">
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/" activeClassName="link-active"><RiArrowGoBackLine className="mb-1" onClick={handleClose} />
                            VOLVER A LANDING
                        </Nav.Link>
                    </li>
                </div>
            </Modal.Body>
        </Modal>

    )
}

export default NavbarAdminMobile
