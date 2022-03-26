import { Card, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./caratula.css";

export default function Caratula({ caratula }) {
  
  const { name, id , image} = caratula;
  const history = useHistory()
  function redirect(){
      history.push(`/search-page/${id}`);
  }

  return (
 <>
      <Card onClick={() => redirect()} className="m-2 card-estilo" style={{ width: "10rem" }}>
        <Image
          className="p-0 card-imagen"
          variant=""
          src={image.original}
        />
        <h3 className="card-name m-0 p-0 text-center text-white">
          {name}
        </h3>
      </Card>
      </>

  );
}
