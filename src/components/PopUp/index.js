import React from "react";
import Toast from "react-bootstrap/Toast";

export default function PopUp(props) {
  let styles = [{}];
  let operationText = "";
  switch (props.type) {
    case "add":
      styles = {
        position: "absolute",
        bottom: 0,
        left: 0,
        minWidth: 156,
        maxWidth: "30%",
        backgroundColor: "forestgreen",
        color: "white",
      };
      operationText = "added to shopping cart";
      break;
    case "remove":
      styles = {
        position: "absolute",
        bottom: 0,
        left: 0,
        minWidth: 156,
        maxWidth: "30%",
        backgroundColor: "crimson",
        color: "white",
      };
      operationText = "removed from shopping cart";
      break;
  }
  return (
    <Toast
      onClose={props.onHide}
      show={props.show}
      delay={3000}
      autohide
      style={styles}
    >
      <Toast.Header>
        <strong>SUSHI STORE</strong>
      </Toast.Header>
      <Toast.Body>
        {props.item} {operationText}
      </Toast.Body>
    </Toast>
  );
}
