import React from "react";
import "./styles.css";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CheckoutForm from "../CheckoutForm";

export default function Checkout(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <div className="checkout-modal">
        <div className="checkout-header">
          <div className="checkout-title-container">
            <div className="checkout-title">Checkout</div>
            <div className="checkout-subtitle">
              You are almost there! Fill this quick form with your info so we
              can deliver our products! (ps: we will not)
            </div>
          </div>
          <FontAwesomeIcon icon={faTimes} onClick={props.onHide} />
        </div>
        <div className="checkout-body">
          <CheckoutForm />
        </div>
      </div>
    </Modal>
  );
}
