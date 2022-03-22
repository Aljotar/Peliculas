import React from "react";
import { Card, Image } from "react-bootstrap";

export default function DetailsMovie({ caratulas }) {
  

  return (
    <div>
      <Card className="m-2 card-estilo" style={{ width: "15rem" }}>
        <Image className="p-0 card-imagen" variant=""  />
        <h3 className="card-name m-0 p-0 text-center text-white">{caratulas.name}</h3>
      </Card>
    </div>
  );
}
