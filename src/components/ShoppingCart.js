import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Cart from "./Cart";
import "../styles/ShoppingCart.css";

export default function ShoppingCart() {
  const { state } = useContext(CartContext);
  const { data, countTotal } = state;

  function FormartNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  const totalPrice = data.reduce((acc, curr) => {
    if (curr.count) {
      const currTotal = curr.price_real * curr.count;
      acc += currTotal;
    }
    return acc;
  }, 0);

  return (
    <div className="values">
      <h1 className="title-cart"> Carrito de compras</h1>
      <h2 className="items-total">
        <span className="items-countTotal">{countTotal}</span>Items
      </h2>
      <div className="items-shoppingCart">
        <div className="product-shoppingCart">
          <h3 className="item-cart">Item</h3>
        </div>
        <div className="count-price">
          <h3 className="count-cart">Cantidad</h3>
          <h3 className="price-cart">Precio</h3>
        </div>
      </div>
      {data.map((item) => (
        <>
          {item.count && (
            <>
              <Cart
                key={item.id}
                id={item.id}
                title={item.title}
                price_real={item.price_real}
                image={item.image}
                count={item.count}
                units_sf={item.units_sf}
                net_content={item.net_content}
                supplier={item.supplier}
              ></Cart>
            </>
          )}
        </>
      ))}
      <div className="total-total">
        <h2 className="text-total">Total:</h2>
        <h2 className="count-total">
          <span className="sign-shoppingCart">$</span>
          {FormartNumber(totalPrice)}
        </h2>
      </div>
    </div>
  );
}
