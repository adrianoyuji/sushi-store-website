import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import Modal from "react-bootstrap/Modal";
import QuantityButtons from "../../components/QuantityButtons";
import { GlobalContext } from "../../contexts/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail(props) {
  const { cart, setCart } = useContext(GlobalContext);

  const [quantity, setQuantity] = useState(1);
  useEffect(() => setQuantity(1), [props.show]);

  if (!!props.product) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.product.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="modal-image">
            <img
              src={props.product.image}
              alt={props.product.name}
              height="100%"
              width="100%"
            />
          </div>
          <div className="modal-description">{props.product.description}</div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-quantity">
            <QuantityButtons quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="modal-price">
            US$ {(parseFloat(props.product.price) * quantity).toFixed(2)}
          </div>
          <div
            className="add-to-cart-button"
            onClick={() => {
              setCart([
                ...cart,
                {
                  product: props.product,
                  quantity: quantity,
                  id: Math.floor(Math.random() * 1001),
                },
              ]);
              props.setAddedItem(props.product.name);
              props.onHide();
              props.setShowPopUp(true);
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
          </div>
        </Modal.Footer>
      </Modal>
    );
  } else return null;
}
