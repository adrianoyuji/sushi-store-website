import React from "react";
import "./styles.css";

export default function Product(props) {
  return (
    <div
      className="product-card"
      onClick={() => props.setSelectedProduct(props.item)}
    >
      <div className="product-details">
        <div className="product-title">{props.item.name}</div>
        <div className="product-category">
          {props.item.category.replace("-", " ").toUpperCase()}
        </div>
        <div className="product-price">
          US$ {parseFloat(props.item.price).toFixed(2)}
        </div>
      </div>
      <div className="product-thumb">
        <img
          src={props.item.image}
          alt={props.item.name}
          height="100%"
          width="100%"
          className="product-img"
        />
      </div>
    </div>
  );
}
