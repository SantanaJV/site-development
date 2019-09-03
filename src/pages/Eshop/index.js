import React from 'react';

import {Container, Row, Col, Jumbotron, ListGroup, CardColumns, Card, Button } from 'react-bootstrap';

export default class Eshop extends React.Component {
  state = {
    categories: [
      { 
        category: 'eletronicos',
        display:'Eletrônicos'
      },
      { 
        category: 'roupas',
        display:'Roupas'
      },
      { 
        category: 'eletrodomesticos',
        display:'Eletrodomésticos'
      },
    ],
    products: [
      {
        name: 'Eletronic 1',
        category: 'eletronicos'
      },
      {
        name: 'Eletronic 2',
        category: 'eletronicos'
      },
      {
        name: 'Eletronic 3',
        category: 'eletronicos'
      },
      {
        name: 'Roupa 1',
        category: 'roupas'
      },
      {
        name: 'Roupa 2',
        category: 'roupas'
      },
      {
        name: 'Roupa 3',
        category: 'roupas'
      },
      {
        name: 'Eletrodoméstico 1',
        category: 'eletrodomesticos'
      },
      {
        name: 'Eletrodoméstico 2',
        category: 'eletrodomesticos'
      },
      {
        name: 'Eletrodoméstico 3',
        category: 'eletrodomesticos'
      },
      {
        name: 'Eletrodoméstico 4',
        category: 'eletrodomesticos'
      },
      {
        name: 'Eletrodoméstico 5',
        category: 'eletrodomesticos'
      },
      {
        name: 'Eletrodoméstico 6',
        category: 'eletrodomesticos'
      },
      {
        name: 'Eletrodoméstico 7',
        category: 'eletrodomesticos'
      },
    ],
    currentCategory: {},
    currentProducts: [

    ]
  }

  loadCategoryProducts = (category) => {
    let { products } = this.state;

    let p = [];
    products.map((product) => {
      if(product.category === category.category)
        p.push(product);
    });
    
    this.setState({ currentProducts: p });
  }

  alertClicked = (param) => {
    console.log(param);
  }

  componentDidMount() {
    this.loadCategoryProducts({ category: 'eletronicos', display: 'Eletrônicos'});
  }

  render() {
    return (
      <>
        <Jumbotron>
          <h1>Sistema de pagamento integrado via Gerencianet!</h1>
          <p>Você só precisa se cadastrar no serviço, deixe a implementação comigo. Fácil de usar e 
            administrar, o dinheiro é totalmente gerenciado por você pela plataforma da Gerencianet! 
            Pagamentos via boleto ou cartão de crédito.
          </p>
        </Jumbotron>
        <Container>
          <Row>
            <Col lg="3">
              <ListGroup>
                {this.state.categories.map((category, idx) => (
                  <ListGroup.Item action onClick={() => this.loadCategoryProducts(category)} key={idx}>{category.display}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col lg="9">
              <Row>
                {this.state.currentProducts.map((product, idx) => (
                  <Col lg="4" className="mb-3">
                    <Card>
                      <Card.Img variant="top" src="https://lorempixel.com/260/160"/>
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          Lorem ipsum dolor sit amet.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="p-0">
                        <Button variant="warning" className="w-100 h-100 d-block">
                          <span className="display-4" style={{ fontSize: 22 }}>Carrinho</span>
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}