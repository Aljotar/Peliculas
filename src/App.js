import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./Components/SearchPage";
import { Home } from "./Components/Home";
import  Login from "./pages/Login";
import Register from "./pages/Register";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailsMovie from "./pages/DetailsMovie";
import { TheNav } from "./Components/TheNav";
import MyProfile from "./pages/MyProfile";
import { SpinnerRW } from "./Components/spinner/SpinnerRW";

// admin pages
import AdminBoard from "./pages/admin/AdminBoard";
import UserList from "./pages/admin/UserList";
import ProfileAdmin from "./pages/admin/ProfileAdmin";
// utils
import { leerDeLocalStorage } from './utils/localStorage';

function App() {

  const tokenLocalData = leerDeLocalStorage('token') || {};

  const [user, setUser] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  const requestUserData = async () => {
    const tokenLocal = leerDeLocalStorage('token') || {};
    setIsLoading(true);

    try {
      if (tokenLocal.token) {
        const headers = { 'x-auth-token': tokenLocal.token };
        const response = await axios.get('https://hulkstore-server.herokuapp.com/api/auth', { headers });
        setUser(response.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token');
      alert('Su sesión expiró.')
      window.location.href = '/';
    }
  };
    // get usuarios de api rest
    const [tableUsers, setTableUsers] = useState([])
    const getUsers = async () => {
      try {
        const response = await axios.get('https://hulkstore-server.herokuapp.com/api/usuarios');
        setUsuarios(response.data);
        setTableUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getUsers();
    }, [])
  
    const isAdmin = user.role === 'admin';
  

  return (
    <BrowserRouter>
      <TheNav />
      <Routes>
        <Route path="/"> <Home /> </Route>

        <Route path="/search-page"><SearchPage loading={loading} /></Route>

        <Route path="/search-page/:movieId"><DetailsMovie/></Route>

        <Route path="/favorite" />

        <Route path="/login"><Login requestUserData={requestUserData} /></Route>

        <Route path="/register"><Register /></Route>
    
        <Route path="/myProfile"> <MyProfile/></Route>

                {/* Admin pages */}
                {isAdmin && (
          <Route path="/adminBoard" >
            <AdminBoard
              />
          </Route>
        )}
        {isAdmin && (
          <Route path="/profileAdmin" >
            <ProfileAdmin
              requestUserData={requestUserData}
              user={user} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/userList" >
            <UserList
              user={user}
              usuarios={usuarios}
              getUsers={getUsers}
              tableUsers={tableUsers} setTableUsers={setTableUsers} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
