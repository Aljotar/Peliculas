import React from "react";
import { Col, Row } from "react-bootstrap";
import Caratulas from "./Caratulas";
import Footer from "./Footer";

export const SearchPage = ({ caratulas, loading }) => {
  return (
    <div>
      <Row className="m-0">
        <Col sm={2}>
        </Col>
        <Col className="p-0" sm={10}>
          <Caratulas caratulas={caratulas} setLoading={loading} />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
