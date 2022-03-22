import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./Components/SearchPage";
import { Home } from "./Components/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailsMovie from "./pages/DetailsMovie";
import { TheNav } from "./Components/TheNav";

function App() {

  const [caratulas, setCaratulas] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const request = async () => {
      const response = await axios.get(
        `https://api.tvmaze.com/shows?`
      );
      const info = response.data;
      setCaratulas(info);
      setLoading(false);
    };
    request();
  }, []);

  return (
    <BrowserRouter>
      <TheNav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search-page" element={<SearchPage caratulas={caratulas} loading={loading} />} />

        <Route path="/search-page/:movieId" element={<DetailsMovie caratulas={caratulas}/>} />

        <Route path="/favorite" />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
