import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import PopUp from "../../components/PopUp";
import { GlobalContext } from "../../contexts/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCart() {
  const { cart, setCart } = useContext(GlobalContext);
  const [totalValue, setTotalValue] = useState(0);
  const [quantityWatcher, setQuantityWatcher] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [removedItem, setRemovedItem] = useState("");

  useEffect(() => {
    let newValue = 0;
    cart.map((item) => (newValue += item.quantity * item.product.price));
    setTotalValue(newValue);
    setQuantityWatcher(false);
  }, [cart, quantityWatcher]);

  function handleRemove(id, name) {
    setCart(cart.filter((item) => item.id !== id));
    setRemovedItem(name);
    setShowPopUp(true);
  }

  return (
    <div className="shopping-cart">
      <div className="shoppingcart-title">SUMMARY</div>
      <div className="shoppingcart-list">
        <div className="shoppincartlist-header">
          <div className="shoppincartlist-items">ITEMS</div>
          <div className="shoppincartlist-action">ACTIONS</div>
        </div>
        {cart.length ? (
          cart.map((item, index) => (
            <ShoppingCartItem
              product={item.product}
              quantity={item.quantity}
              cart={cart}
              id={item.id}
              setCart={setCart}
              key={item.id}
              handleRemove={handleRemove}
              setQuantityWatcher={setQuantityWatcher}
            />
          ))
        ) : (
          <div className="shoppingcart-empty">Your cart is empty</div>
        )}
      </div>
      <div className="shoppingcart-footer">
        <div className="shoppingcart-total">
          Total: US$ {totalValue.toFixed(2)}
        </div>
        <div
          className="shoppingcart-submit"
          onClick={() =>
            alert("Thanks for testing my website! by Adriano Yuji")
          }
        >
          <FontAwesomeIcon icon={faCashRegister} />
          {"  "}
          PURCHASE
        </div>
      </div>
      <PopUp
        onHide={() => setShowPopUp(false)}
        show={showPopUp}
        item={removedItem}
        type="remove"
      />
    </div>
  );
}
