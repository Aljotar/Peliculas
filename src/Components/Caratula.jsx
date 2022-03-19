import { Card, Image } from "react-bootstrap";
import "./caratula.css";

export default function Caratula({ caratula }) {
  const { show } = caratula;


  return (
    <Card className="m-2 card-estilo" style={{ width: "15rem" }}>
      <Image
        className="p-0 card-imagen"
        variant=""
        src={show.image.original}
      />
      <h3 className="card-name m-0 p-0 text-center text-white">{show.name}</h3>
    </Card>
  );
}
