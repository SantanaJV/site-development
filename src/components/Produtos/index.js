import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Col, Row, ListGroup, Card, Button } from "react-bootstrap";

import "./styles.css";

import Carrinho from "../../components/Carrinho";
import { getProductsByCategory } from "../../services/shop.service";

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
    currentCategory: "",
    currentProducts: [],
    listStyle: "grid"
  };

  loadCategoryProducts = async category => {
    let products = await getProductsByCategory(category);
    this.setState({ currentProducts: products });
  };

  componentDidMount() {
    this.loadCategoryProducts({
      category: "eletronicos",
      display: "Eletrônicos"
    });
  }

  handleClick = () => {
    if (this.state.listStyle === "grid") {
      this.setState({ listStyle: "list" });
    } else this.setState({ listStyle: "grid" });
  };

  renderList = () => {
    if (this.state.listStyle === "grid") {
      return this.state.currentProducts.map((product, idx) => (
        <Col lg="4" key={idx} className="mb-3">
          <Card>
            <Link className="link" to={"/produto/" + product.id}>
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
            {this.state.currentProducts.map((product, idx) => (
              <ListGroup.Item
                className="p-0 d-inline-flex align-items-stretch justify-content-between"
                key={idx}
              >
                <div className="d-inline-flex flex-fill align-items-center">
                  <Link className="link" to={"/produto/" + product.id}>
                    <img
                      src="https://lorempixel.com/64/64"
                      alt="Product Icon"
                    />
                  </Link>
                  <Link className="link" to={"/produto/" + product.id}>
                    <h5 className="m-0 ml-2 display-4 rem-2 no-wrap">
                      {product.name}
                    </h5>
                  </Link>
                </div>
                <div className="mx-3 flex-fill align-self-center ellipsis">
                  <Link className="link" to={"/produto/" + product.id}>
                    {product.description}
                  </Link>
                </div>
                <div className="d-inline-flex align-items-center">
                  <p className="rem-5 display-4 green m-0 mr-3">
                    {product.price}$
                  </p>
                  <Carrinho />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      );
    }
  };

  render() {
    let icon = this.state.listStyle === "grid" ? "th-large" : "bars";

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
                <Button
                  variant="outline-dark"
                  onClick={this.handleClick}
                  className="float-right"
                >
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
