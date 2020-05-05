import React, { useState, useEffect } from "react";
import QuantityButtons from "../QuantityButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function ShoppingCartItem(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  useEffect(() => {
    const changedCart = props.cart;
    changedCart.map((item, index) => {
      if (item.id === props.id) {
        changedCart[index].quantity = quantity;
      }
    });
    props.setCart(changedCart);
    props.setQuantityWatcher(true);
  }, [quantity]);

  return (
    <div className="shoppingcart-item">
      <div className="shoppingcart-image">
        <img
          src={props.product.image}
          alt={props.product.name}
          height="100%"
          width="100%"
          className="shoppingcart-image"
        />
      </div>
      <div className="shoppingcart-details">
        <div className="shoppingcart-name">{props.product.name}</div>
        <div className="shoppingcart-category">
          {props.product.category.replace("-", " ").toUpperCase()}
        </div>
        <div className="subtotal">SUBTOTAL:</div>
        <div className="shoppingcart-price">
          US$ {(parseFloat(props.product.price) * quantity).toFixed(2)}
        </div>
      </div>
      <div className="shoppingcart-actions">
        <QuantityButtons quantity={quantity} setQuantity={setQuantity} />
        <div
          className="shoppingcart-remove"
          onClick={() => {
            props.handleRemove(props.id, props.product.name);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} size={16} /> REMOVE
        </div>
      </div>
    </div>
  );
}
