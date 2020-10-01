import React, { useState, useContext } from "react";
import ReactTooltip from "react-tooltip";
import { CartContext } from "../CartContext";
import "../styles/Card.css";

export default function Card({
  id,
  title,
  supplier,
  price_real,
  image,
  net_content,
  units_sf,
  sellos,
  count,
}) {
  const [isShown, setIsShown] = useState(false);
  const { dispatch } = useContext(CartContext);

  function FormartNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div className="card-complete">
      <div
        className="carousel-card"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="card-header">
          <img src={image} className="image" alt={title} />
          <div className="icones">
            {sellos &&
              sellos.map((sello) => (
                <div key={sello.name}>
                  <img
                    src={sello.image}
                    className="sellos"
                    alt={sello.name}
                    data-tip
                    data-for={sello.name}
                  />
                  <ReactTooltip
                    id={sello.name}
                    place="right"
                    effect="solid"
                    type="info"
                  >
                    <span className="text-toolstip">
                      <span className="product-toolstip">Producto</span>
                      <br />
                      {sello.name === "khoser " ? "Sin azúcar" : sello.name}
                    </span>
                  </ReactTooltip>
                </div>
              ))}
          </div>
        </div>
        <div className="content">
          <p className="text-superfuds">{supplier}</p>
          <p className="gramos">{net_content}</p>
        </div>
        <h2 className="title-product">{title}</h2>
        <div className="units">
          <h3 className="price">
            <span className="sign">$</span>
            {FormartNumber(price_real)}
          </h3>
          <p className="unid">x{units_sf} unids</p>
        </div>
        <div className="add-button">
          {isShown && (
            <>
              <button
                onClick={() => dispatch({ type: "ADD", id })}
                className="add-car"
              >
                Agregar al carrito
              </button>
              {count && (
                <button
                  onClick={() => dispatch({ type: "REMOVE", id })}
                  className="add-car"
                >
                  Eliminar del carrito
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
