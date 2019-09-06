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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletronicos",
        price: 10
      },
      {
        name: "Eletronic 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletronicos",
        price: 20
      },
      {
        name: "Eletronic 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletronicos",
        price: 30
      },
      {
        name: "Roupa 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "roupas",
        price: 10
      },
      {
        name: "Roupa 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "roupas",
        price: 20
      },
      {
        name: "Roupa 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "roupas",
        price: 30
      },
      {
        name: "Eletrodoméstico 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletrodomesticos",
        price: 10
      },
      {
        name: "Eletrodoméstico 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletrodomesticos",
        price: 20
      },
      {
        name: "Eletrodoméstico 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletrodomesticos",
        price: 30
      },
      {
        name: "Eletrodoméstico 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletrodomesticos",
        price: 40
      },
      {
        name: "Eletrodoméstico 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletrodomesticos",
        price: 50
      },
      {
        name: "Eletrodoméstico 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletrodomesticos",
        price: 60
      },
      {
        name: "Eletrodoméstico 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "eletrodomesticos",
        price: 70
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

    products.forEach(product => {
      if (product.category === category.category) p.push(product);
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
              <Card.Text className="ellipsis">{product.description}</Card.Text>
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
              <ListGroup.Item className="p-0 d-inline-flex align-items-stretch justify-content-between" key={idx}>
                <div className="d-inline-flex flex-fill align-items-center">
                  <img src="https://lorempixel.com/64/64" alt="Product Icon" />
                  <h5 className="m-0 ml-2 display-4 rem-2 no-wrap">{product.name}</h5>
                </div>
                <div className="mx-3 flex-fill align-self-center ellipsis">
                    {product.description}
                </div>
                <div className="d-inline-flex align-items-center">
                  <p className="rem-5 display-4 green m-0 mr-3">{product.price}$</p>
                  <Carrinho />
                </div>
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
