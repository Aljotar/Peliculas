import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./Components/SearchPage";
import { Home } from "./Components/Home";

function App() {
  const [caratulas, setCaratulas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const request = async () => {
      const response = await axios.get(
        `http://api.tvmaze.com/search/shows?q=star%20wars`
      );
      const info = response.data;
      console.log(info);
      setCaratulas(info);
      setLoading(false);
    };
    request();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="/search-page"
          element={<SearchPage caratulas={caratulas} loading={loading} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
