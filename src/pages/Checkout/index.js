import React from "react";
import "./styles.css";
import CheckoutForm from "../../components/CheckoutForm";
import { GlobalContext } from "../../contexts/global";

export default function Checkout(props) {
  const { cart } = React.useContext(GlobalContext);

  function checkoutList() {
    let total = 0;
    cart.map((item) => (total = total + item.product.price * item.quantity));

    return (
      <div className="checkout-list">
        <div className="checkout-title">Shopping Cart</div>
        <div className="checkout-list-item">
          <div className="checkout-header-name">Name</div>
          <div className="checkout-header-qtd">Qtd.</div>
        </div>
        <div className="checkout-scroll">
          {cart.map((item, index) => (
            <div key={index} className="checkout-list-item">
              <div className="checkout-list-name">{item.product.name}</div>
              <div className="checkout-list-qtd">x{item.quantity}</div>
            </div>
          ))}
        </div>

        <div className="checkout-total">Total: US${total.toFixed(2)}</div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="checkout-title-container">
          <div className="checkout-title">CHECKOUT</div>
          <div className="checkout-subtitle">
            You are almost there! Fill this quick form with your info so we can
            deliver our products! (ps: you can use fake info)
          </div>
        </div>
      </div>
      <div className="checkout-container">
        {checkoutList()}
        <div className="checkout-body">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
