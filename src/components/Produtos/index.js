import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Col, Row, ListGroup, Card, Button } from "react-bootstrap";

import Carrinho from "../../components/Carrinho";

export default class Produtos extends React.Component {
  state = {
    categories: [
      {
        category: "eletronicos",
        display: "Eletrônicos"
      },
      {
        category: "roupas",
        display: "Roupas"
      },
      {
        category: "eletrodomesticos",
        display: "Eletrodomésticos"
      }
    ],
    products: [
      {
        name: "Eletronic 1",
        category: "eletronicos"
      },
      {
        name: "Eletronic 2",
        category: "eletronicos"
      },
      {
        name: "Eletronic 3",
        category: "eletronicos"
      },
      {
        name: "Roupa 1",
        category: "roupas"
      },
      {
        name: "Roupa 2",
        category: "roupas"
      },
      {
        name: "Roupa 3",
        category: "roupas"
      },
      {
        name: "Eletrodoméstico 1",
        category: "eletrodomesticos"
      },
      {
        name: "Eletrodoméstico 2",
        category: "eletrodomesticos"
      },
      {
        name: "Eletrodoméstico 3",
        category: "eletrodomesticos"
      },
      {
        name: "Eletrodoméstico 4",
        category: "eletrodomesticos"
      },
      {
        name: "Eletrodoméstico 5",
        category: "eletrodomesticos"
      },
      {
        name: "Eletrodoméstico 6",
        category: "eletrodomesticos"
      },
      {
        name: "Eletrodoméstico 7",
        category: "eletrodomesticos"
      }
    ],
    currentCategory: {},
    currentProducts: [],
    listStyle: "cards"
  };

  loadCategoryProducts = category => {
    let { products } = this.state;
    this.setState({ currentCategory: category });

    let p = [];
    products.map(product => {
      if (product.category === category.category) p.push(product);
      return;
    });

    this.setState({ currentProducts: p });
  };

  componentDidMount() {
    this.loadCategoryProducts({
      category: "eletronicos",
      display: "Eletrônicos"
    });
  }

  handleClick = () => {
    if(this.state.listStyle === 'grid'){
      this.setState({ listStyle: 'list' });
    } else this.setState({listStyle: 'grid'});
  }

  renderList = () => {
    if(this.state.listStyle === 'grid') {
      return this.state.currentProducts.map((product, idx) => (
        <Col lg="4" key={idx} className="mb-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://lorempixel.com/260/160"
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
            </Card.Body>
            <Card.Footer className="p-0">
              <Carrinho />
            </Card.Footer>
          </Card>
        </Col>
      ))
    } else {
      return (
        <Col xs="12" className="mb-3">
          <ListGroup>
            {this.state.currentProducts.map((product, idx) => (
              <ListGroup.Item className="p-0" key={idx}>
                <img className="mr-2" src="https://lorempixel.com/64/64"/>
                <h5 className="m-0">{product.name}</h5>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      );
    }
  }

  render() {
    let icon = this.state.listStyle === 'grid' ? 'th-large' : 'bars';

    return (
      <Container>
        <Row>
          <Col lg="3">
            <ListGroup>
              {this.state.categories.map((category, idx) => (
                <ListGroup.Item
                  action
                  onClick={() => this.loadCategoryProducts(category)}
                  key={idx}
                >
                  {category.display}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="9">
            <Row>
              <Col xs="12" className="mb-3">
                <Button variant="outline-dark" onClick={this.handleClick} className="float-right">
                  <FontAwesomeIcon icon={icon} />
                </Button>
              </Col>
              {this.renderList()}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
