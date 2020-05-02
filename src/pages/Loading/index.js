import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./styles.css";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading-title">
        <div className="loading-left">SUSHI </div>
        <div className="loading-right">STORE</div>
      </div>

      <Spinner animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
