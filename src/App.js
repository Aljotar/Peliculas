import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./Components/SearchPage";
import { Home } from "./Components/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-page"
          element={<SearchPage />}
        />

        <Route path="/favorite"/>

        <Route path="/login" element={<Login />}/>

        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
