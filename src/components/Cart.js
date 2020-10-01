import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Cart.css";

export default function Cart({
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
  const { dispatch, state } = useContext(CartContext);
  const { data } = state;

  console.log("data en Carta", data);

  function FormartNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div className="card-shoppingCartComplete">
      <div className="card-shoppingCart">
        <div className="card-headerShoppingCar">
          <img src={image} className="image-shoppingCart" alt={title} />
          <div className="content-shoppingCart">
            <h2 className="title-productShoppingCart">{title}</h2>
            <div className="specification">
              <p className="unid-shoppingCart">x {units_sf} unids</p>
              <p className="gramos-shoppingCart"> -{net_content} c/u</p>
            </div>
            <p className="text-superfudsShoppingCart">{supplier}</p>
          </div>
        </div>
        <div className="quantity">
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="minus"
            onClick={() => dispatch({ type: "REMOVE", id })}
          />
          <h2 className="quantity-unids">{count}</h2>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="plus"
            onClick={() => dispatch({ type: "ADD", id })}
          />
        </div>
        <div className="cost">
          <h3 className="price-shoppingCart">
            <span className="sign-shoppingCart">$</span>
            <p className="real-price">{FormartNumber(price_real * count)}</p>
          </h3>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="trash"
            onClick={() => dispatch({ type: "DELETE", id })}
          />
        </div>
      </div>
    </div>
  );
}
