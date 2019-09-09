import React from 'react';

import { Col, Row, Container, Button, Jumbotron } from 'react-bootstrap';

export default class AdminTools extends React.Component {

  render() {
    return (
      <>
        <Jumbotron>
          <h2 className="display-2">Ferramentas Administrativas</h2>
          <p className="text-muted">Ferramentas para administrar a sua loja. Crie novas categorias, crie novos produtos, atualize os já existentes e remova o que você quiser!</p>
        </Jumbotron>
        <Container>
          <Row>
            <Col className="d-flex">
              <Button className="mx-auto" variant="danger">
                Remove
              </Button>
              <Button variant="dark">
                Add
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}