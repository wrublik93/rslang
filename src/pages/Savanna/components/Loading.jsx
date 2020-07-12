import React from "react";
import "../style.scss";
import { Spinner } from "react-bootstrap";

export default function Loading({ setSpinnerVisible }) {
  function spinnerTimer() {
    setTimeout(
      () => setSpinnerVisible(false),

      1000
    );
  }

  return (
    <div className="spinner-container">
      {spinnerTimer()}
      <Spinner animation="border" />
    </div>
  );
}
