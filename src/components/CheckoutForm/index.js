import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function CheckoutForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) =>
    alert(
      "Thanks for testing my website! Feel free to message me on LinkedIn!"
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="user-info">
        <div className="input-container">
          <label className="form-label">Full Name: </label>
          <input
            name="username"
            type="text"
            placeholder="ex: Carl Johnson"
            ref={register({ required: true })}
          />
          {errors.username && (
            <span className="errorText">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              This field is required!
            </span>
          )}
        </div>
        <div className="input-container">
          <label className="form-label">Email: </label>
          <input
            name="email"
            type="text"
            placeholder="ex: carljohnson@email.com"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span className="errorText">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              This field is required!
            </span>
          )}
        </div>
      </div>

      <div className="user-address">
        <div className="input-container">
          <label className="form-label">Shipping Address: </label>
          <input
            name="shippingAddress"
            type="text"
            placeholder="ex: Grove Street"
            ref={register({ required: true })}
          />
          {errors.shippingAddress && (
            <span className="errorText">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              This field is required!
            </span>
          )}
        </div>
        <div className="input-container">
          <label className="form-label">Address number: </label>
          <input
            name="addressNumber"
            type="number"
            placeholder="ex: 123"
            ref={register({ required: true })}
          />
          {errors.addressNumber && (
            <span className="errorText">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              This field is required!
            </span>
          )}
        </div>
      </div>

      <div className="user-location">
        <div className="input-container">
          {" "}
          <label className="form-label">City: </label>
          <input
            name="city"
            type="text"
            placeholder="ex: Los Santos"
            ref={register({ required: true })}
          />
          {errors.city && (
            <span className="errorText">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              This field is required!
            </span>
          )}
        </div>
        <div className="input-container">
          {" "}
          <label className="form-label">State: </label>
          <input
            name="state"
            type="text"
            placeholder="ex: California"
            ref={register({ required: true })}
          />
          {errors.state && (
            <span className="errorText">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              This field is required!
            </span>
          )}
        </div>
        <div className="input-container">
          {" "}
          <label className="form-label">ZIP: </label>
          <input
            name="zip"
            type="number"
            placeholder="ex: 123456"
            ref={register({ required: true })}
          />
          {errors.zip && (
            <span className="errorText">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              This field is required!
            </span>
          )}
        </div>
      </div>

      <input
        className="submit-button"
        type="submit"
        value="Finish and Submit"
      />
    </form>
  );
}
