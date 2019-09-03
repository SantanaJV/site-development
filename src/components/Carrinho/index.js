import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { login } from "../../services/user.service";

function Carrinho() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!localStorage.getItem("loggedin")) setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleClick = () => {
    login();
    handleClose();
  };

  return (
    <>
      <Button
        variant="warning"
        className="w-100 h-100 d-block"
        onClick={handleShow}
      >
        <span className="display-4" style={{ fontSize: 22 }}>
          Carrinho
        </span>
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
