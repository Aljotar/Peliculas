import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { SearchPage } from "./Components/SearchPage";
import { Home } from "./Components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailsMovie from "./pages/DetailsMovie";
import MyProfile from "./pages/MyProfile";

// admin pages
import AdminBoard from "./pages/admin/AdminBoard";
import UserList from "./pages/admin/UserList";
import ProfileAdmin from "./pages/admin/ProfileAdmin";
// utils
import { leerDeLocalStorage } from "./utils/localStorage";
import { NavbarMain } from "./Components/navbarMain/NavbarMain";

function App() {
  const tokenLocalData = leerDeLocalStorage("token") || {};

  const [user, setUser] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  const requestUserData = async () => {
    const tokenLocal = leerDeLocalStorage("token") || {};
    setIsLoading(true);

    try {
      if (tokenLocal.token) {
        const headers = { "x-auth-token": tokenLocal.token };
        const response = await axios.get("https://app-movie-pop.herokuapp.com/auth", {
          headers,
        });
        setUser(response.data || {});
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      localStorage.removeItem("token");
      //alert("Su sesión expiró.");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    requestUserData();
  }, []);

  // get usuarios de api rest
  const [tableUsers, setTableUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://app-movie-pop.herokuapp.com/usuarios"
      );
      setUsuarios(response.data);
      setTableUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const isAdmin = user.role === "admin";

  return (
    <>
      <NavbarMain user={user} />
      <Switch>
        <Route path="/" exact>
          {" "}
          <Home />{" "}
        </Route>

        <Route path="/search-page/:movieId">
          <DetailsMovie />
        </Route>

        <Route path="/search-page">
          <SearchPage loading={loading} />
        </Route>

        <Route path="/login">
          <Login requestUserData={requestUserData} />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        {tokenLocalData.token && (
          <Route path="/myProfile">
            <MyProfile requestUserData={requestUserData} user={user} />
          </Route>
        )}

        {/* Admin pages */}
        {isAdmin && (
          <Route path="/adminBoard">
            <AdminBoard />
          </Route>
        )}
        {isAdmin && (
          <Route path="/profileAdmin">
            <ProfileAdmin requestUserData={requestUserData} user={user} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/userList">
            <UserList
              user={user}
              usuarios={usuarios}
              getUsers={getUsers}
              tableUsers={tableUsers}
              setTableUsers={setTableUsers}
            />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
