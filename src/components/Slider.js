import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import { CartContext } from "../CartContext";
import Card from "./Card";
import "../styles/Slider.css";

export default function Slider() {
  const { state } = useContext(CartContext);
  const { data } = state;

  return (
    <div className="values">
      <h1 className="title-new">Nuevo en SuperFüds</h1>
      <div className="carousel">
        <Carousel itemsToShow={4}>
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price_real={item.price_real}
              image={item.image}
              units_sf={item.units_sf}
              net_content={item.net_content}
              sellos={item.sellos}
              supplier={item.supplier}
              count={item.count}
            ></Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
