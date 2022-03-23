import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './navbarMain.css'

import { leerDeLocalStorage } from '../../utils/localStorage';
import { NavbarAdmin } from '../navbarAdmin/NavbarAdmin';
import NavbarMainMobile from './NavbarMainMobile';
import { NavTop } from './NavTop';


export const NavbarMain = ({ user }) => {
    const tokenLocal = leerDeLocalStorage('token') || {};

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('favorites');
        localStorage.removeItem('cart');
        window.location.href = '/';
    }

    return (
        <>
            {splitLocation[1] !== "adminBoard"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "profileAdmin"
                &&
                <>
                    <NavTop
                        handleShow={handleShow}
                        tokenLocal={tokenLocal}
                        user={user}
                        logout={logout}
                        splitLocation={splitLocation}
                    />
                </>
            }
            {splitLocation[1] !== "adminBoard"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "adminProfile"
                &&
                <NavbarMainMobile user={user} setShow={setShow} show={show} />
            }
            {splitLocation[1] === "adminBoard" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "userList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "profileAdmin" && <NavbarAdmin user={user} />}
        </>

    )
}

