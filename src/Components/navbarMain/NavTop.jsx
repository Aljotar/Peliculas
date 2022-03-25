import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { VscMenu } from 'react-icons/vsc'
import { NavUser } from './NavUser'

export const NavTop = ({ handleShow, tokenLocal, splitLocation, user, logout }) => {

    const [isVisible, setIsVisible] = useState('');
    let prevScrollpos = window.pageYOffset;
    const navbarShow = () => {
        if (prevScrollpos >  window.pageYOffset ) {
            setIsVisible('visible');
        } else {
           setIsVisible('no-visible')
        }
        prevScrollpos =  window.pageYOffset;
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarShow)
        return () => {
            window.removeEventListener('scroll', navbarShow)
        }
    });


    return (        
        <Nav className={`navbar d-flex fix-to-top-mobile ${isVisible}`} expand="lg" >
       
                <div className="d-flex align-items-center contenedor">
                    <div className="d-block d-md-none ">
                        <button
                            className="navbar-button"
                            onClick={handleShow}>
                            <VscMenu />
                        </button>
                    </div>
                    <NavUser
                        tokenLocal={tokenLocal}
                        splitLocation={splitLocation}
                        user={user}
                        logout={logout}

                    />

                </div>
        </Nav>
    )
}