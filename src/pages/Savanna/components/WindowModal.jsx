import React from "react";
import "pages/Savanna/style.scss";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WindowModal({ setModalWindowVisible }) {
  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <Modal.Dialog>
        <Modal.Header closeButton onClick={() => setModalWindowVisible(false)}>
          <Modal.Title>The training is not over!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>If you return to the list, your results will not be saved.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">
            <Link to="/home" className="home-page__link">
              Quit the game
            </Link>
          </Button>
          <Button variant="dark" onClick={() => setModalWindowVisible(false)}>
            Сontinue game
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
