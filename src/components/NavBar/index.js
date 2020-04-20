import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NavBar() {
  const [buttonIndex, setButtonIndex] = useState([false, false, false]);
  return (
    <nav className="navigator">
      <Link
        to="/"
        className="home-button"
        onClick={() => setButtonIndex([false, false, false])}
      >
        <div className="home-left">SUSHI</div>
        <div className="home-right"> STORE</div>
      </Link>
      <div className="nav-buttons">
        <Link
          to="/menu"
          className={buttonIndex[0] ? ("nav-button", "selected") : "nav-button"}
          onClick={() => setButtonIndex([true, false, false])}
        >
          MENU
        </Link>

        <Link
          to="/shoppingcart"
          className={buttonIndex[1] ? ("nav-button", "selected") : "nav-button"}
          onClick={() => setButtonIndex([false, true, false])}
        >
          SHOPPING CART
        </Link>

        <Link
          to="/about"
          className={buttonIndex[2] ? ("nav-button", "selected") : "nav-button"}
          onClick={() => setButtonIndex([false, false, true])}
        >
          ABOUT
        </Link>
      </div>
    </nav>
  );
}
