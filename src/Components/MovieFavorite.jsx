import React from 'react'
import { Card, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'

export const MovieFavorite = ({ setFavorites,favorites, favMovie }  ) => {

    const removeFavorite = () => {
        const filterFavorite = favorites.filter((fav) => fav.movie._id !== favMovie.movie._id);
        setFavorites(filterFavorite);
      };
    

  return (
    <Card className="m-2 card-estilo" style={{ width: "10rem" }}>
 
    <Image
      className="p-0 card-imagen"
      variant=""
      src="https://www.geekmi.news/__export/1625772466057/sites/debate/img/2021/07/08/gojo10.jpg_1103262657.jpg"
    />
    <h3 className="card-name m-0 p-0 text-center text-white">
      ALVARO
    </h3>
    <div className="d-flex justify-content-center estilo-fav">
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={
              (props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Eliminar
                </Tooltip>)
            }
          >
            <button className="remove-btn pb-1" onClick={removeFavorite}>
              Borrar
            </button>
          </OverlayTrigger>
        </div>
  </Card>
  )
}
