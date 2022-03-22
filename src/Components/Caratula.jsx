import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./caratula.css";

export default function Caratula({ caratula }) {
  
  const { name , image, id} = caratula;

  return (
    <Link to={"/search-page/"+ id + name}>
      <Card className="m-2 card-estilo" style={{ width: "15rem" }}>
        <Image
          className="p-0 card-imagen"
          variant=""
          src={image.original}
        />
        <h3 className="card-name m-0 p-0 text-center text-white">
          {name}
        </h3>
      </Card>
    </Link>
  );
}
