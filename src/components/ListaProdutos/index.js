import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, ListGroup} from 'react-bootstrap';

import Carrinho from '../Carrinho';

const ListaProdutos = function(props) {
  if(props.products.length === 0) {
    return (
      <Col xs="12" className="display-4 text-muted text-center">
        Ainda não há produtos para essa categoria.
      </Col>
    );
  }
  if (props.listStyle === "grid") {
    return props.products.map((product, idx) => (
      <Col lg="4" key={idx} className="mb-3">
        <Card>
          <Link className="link" to={"/eshop/" + product.id}>
            <Card.Img
              variant="top"
              className="pointer"
              src="https://lorempixel.com/260/160"
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="ellipsis">
                {product.description}
              </Card.Text>
              <Card.Text className="display-4 text-center rem-5 text-success">
                ${(product.price / 100).toFixed(2)}
              </Card.Text>
            </Card.Body>
          </Link>
          <Card.Footer className="p-0">
            <Carrinho />
          </Card.Footer>
        </Card>
      </Col>
    ));
  } else {
    return (
      <Col xs="12" className="mb-3">
        <ListGroup>
          {props.products.map((product, idx) => (
            <ListGroup.Item
              className="p-0 d-inline-flex align-items-stretch justify-content-between"
              key={idx}
            >
              <div className="d-inline-flex flex-fill align-items-center">
                <Link className="link" to={"/eshop/" + product.id}>
                  <img
                    src="https://lorempixel.com/64/64"
                    alt="Product Icon"
                  />
                </Link>
                <Link className="link" to={"/eshop/" + product.id}>
                  <h5 className="m-0 ml-2 display-4 rem-2 no-wrap">
                    {product.name}
                  </h5>
                </Link>
              </div>
              <div className="mx-3 flex-fill align-self-center ellipsis">
                <Link className="link" to={"/eshop/" + product.id}>
                  {product.description}
                </Link>
              </div>
              <div className="d-inline-flex align-items-center">
                <p className="rem-5 display-4 text-success m-0 mr-3">
                  ${(product.price / 100).toFixed(2)}
                </p>
                <Carrinho />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    );
  }
}

export default ListaProdutos;