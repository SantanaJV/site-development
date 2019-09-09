import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Container, Button, Card, Jumbotron, Accordion } from 'react-bootstrap';
import { createProduct, updateProduct, removeProduct, createCategory } from '../../services/shop.service';

export default class AdminTools extends React.Component {

  render() {
    return (
      <>
        <Jumbotron className="text-center">
          <h2 className="display-2">Ferramentas Administrativas</h2>
          <p className="text-muted">Ferramentas para administrar a sua loja. Crie novas categorias, crie novos produtos, atualize os já existentes e remova o que você quiser!</p>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} className="d-flex" eventKey="0">
                    <FontAwesomeIcon className="pointer ml-auto" icon="plus-square" size="2x" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Form</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} className="d-flex" eventKey="1">
                    <h2 className="display-4 ml-auto rem-3 my-0">Produtos</h2>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="p-0">
                      <Accordion defaultActiveKey="1">
                        <Card>
                          <Accordion.Toggle as={Card.Header} className="d-flex" eventKey="0">
                            Produto 1
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Form</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} className="d-flex" eventKey="1">
                            Produto 2
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>form</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}