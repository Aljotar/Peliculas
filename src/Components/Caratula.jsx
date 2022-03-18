import { Card, Image } from "react-bootstrap";
import "./caratula.css";

export default function Caratula({ caratula }) {
  const { show } = caratula;

  const { image, name } = show;

  return (
    <Card className="m-2 card-estilo" style={{ width: "10rem" }}>
      <Image
        className="p-0 card-imagen"
        variant=""
        src={
          show.image
            ? image.medium || image.original
            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
        }
      />
      <h3 className="card-name m-0 p-0 text-center text-white">{name}</h3>
    </Card>
  );
}
