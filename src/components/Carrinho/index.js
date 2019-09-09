import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';

function Carrinho() {
  const handleShow = () => {
    if (!localStorage.getItem("loggedin")) {
      toast.error('Você precisa estar logado para isso!', {
        toastId: 4
      });
    } else {
      toast.success('Sucesso!');
    }
  };

  return (
    <>
      <Button
        variant="warning"
        className="w-100 h-100 d-inline-block"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon="cart-plus" size="2x"/>
      </Button>
    </>
  );
}

export default Carrinho;
