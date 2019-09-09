import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getProductById } from "../../services/shop.service";
import Carrinho from "../../components/Carrinho";

const Produto = function({ match }) {
  const product = getProductById(match.params.id);

  return (
    <Container className="mt-3">
      <Card>
        <Card.Header>
          <Link className="d-inline-flex align-items-center" to="/eshop">
            <FontAwesomeIcon icon="arrow-left" size="2x" className="link" />
          </Link>
          <Card.Title className="d-inline-flex ml-5 justify-self-center m-0 display-4">
            {product.name}
          </Card.Title>
        </Card.Header>
        <Card.Body>{product.description}</Card.Body>
        <Card.Footer>
          <div className="float-right d-flex">
            <h5 className="display-4 mr-3 green">${(product.price / 100).toFixed(2)}</h5>
            <div style={{ width: 150, height: 75 }}>
              <Carrinho />
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Produto;
