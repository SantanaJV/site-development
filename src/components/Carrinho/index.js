import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carrinho() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!localStorage.getItem("loggedin")) setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        variant="warning"
        className="w-100 h-100 d-inline-block"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon="cart-plus" size="2x"/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body closeButton>
          <Modal.Title className="text-center">
            Você precisa estar logado para isso!
          </Modal.Title>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Carrinho;
