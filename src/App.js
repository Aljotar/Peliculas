import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TheNav } from "./Components/TheNav";
import Caratulas from "./Components/Caratulas";
import Footer from "./Components/Footer";
import { Col, Row } from "react-bootstrap";
import { Generos } from "./Components/Generos";

function App() {
  return (
    <div>
      <TheNav />
        <Row>
          <Col className="style-generos" sm={3}><Generos /></Col>
          <Col className="p-0" sm={9}>
            <Caratulas />
          </Col>
        </Row>
      <Footer />
    </div>
  );
}

export default App;
