import React from "react";
import "./styles.css";

export default function CheckoutForm(props) {
  return (
    <form onSubmit={() => alert("thanks for the purchase")}>
      <div className="user-info">
        <div className="input-container">
          <label className="form-label">Full Name: </label>
          <input type="text" placeholder="ex: Carl Johnson" />
        </div>
        <div className="input-container">
          <label className="form-label">Email: </label>
          <input type="text" placeholder="ex: carljohnson@email.com" />
        </div>
      </div>

      <div className="user-address">
        <div className="input-container">
          <label className="form-label">Shipping Address: </label>
          <input type="text" placeholder="ex: Grove Street" />
        </div>
        <div className="input-container">
          <label className="form-label">Address number: </label>
          <input type="number" placeholder="ex: 123" />
        </div>
      </div>

      <div className="user-location">
        <div className="input-container">
          {" "}
          <label className="form-label">City: </label>
          <input type="text" placeholder="ex: Los Santos" />
        </div>
        <div className="input-container">
          {" "}
          <label className="form-label">State: </label>
          <input type="text" placeholder="ex: California" />
        </div>
        <div className="input-container">
          {" "}
          <label className="form-label">ZIP: </label>
          <input type="number" placeholder="ex: 123456" />
        </div>
      </div>

      <input type="submit" value="Finish and Submit" />
    </form>
  );
}
