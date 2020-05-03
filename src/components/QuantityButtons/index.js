import React from "react";
import "./styles.css";

export default function QuantityButtons(props) {
  function handleQuantity(operator) {
    switch (operator) {
      case "+":
        props.setQuantity(props.quantity + 1);
        break;
      case "-":
        if (props.quantity > 1) {
          props.setQuantity(props.quantity - 1);
        }
    }
  }

  return (
    <div className="quantity-buttons">
      <div className="operator-button-left" onClick={() => handleQuantity("-")}>
        -
      </div>
      <div className="quantity">{props.quantity}</div>
      <div
        className="operator-button-right"
        onClick={() => handleQuantity("+")}
      >
        +
      </div>
    </div>
  );
}
