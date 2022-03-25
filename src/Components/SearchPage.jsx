import React from "react";
import { Col, Row } from "react-bootstrap";
import Caratulas from "./Caratulas";

export const SearchPage = ({ caratulas, loading }) => {
  return (
    <div>
      <Row className="m-0">
        <Col className="p-0" sm={12}>
          <Caratulas caratulas={caratulas} setLoading={loading} />
        </Col>
      </Row>
    </div>
  );
};
