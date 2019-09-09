import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Col, Row, ListGroup, Dropdown, DropdownButton, Button } from "react-bootstrap";

import "./styles.css";

import ListaProdutos from '../ListaProdutos';
import { getProductsByCategory, getCategories } from "../../services/shop.service";

export default class Loja extends React.Component {
  state = {
    navigationDetails: {
      docs: 10,
      page: 1,
    },
    currentCategory: "",
    currentProducts: [],
    listStyle: "grid"
  };

  componentDidMount() {
    this.loadCategoryProducts({
      category: "eletronicos",
      display: "Eletrônicos"
    });
  }

  loadProducts = (category, options) => {
    let { data, navigationDetails } = getProductsByCategory(category, options);
    this.setState({ currentProducts: data, navigationDetails, currentCategory: category });
  }

  loadCategoryProducts = category => {
    if(this.state.currentCategory === category.category) return;

    let { docs } = this.state.navigationDetails;

    this.loadProducts(category, {docs, page: 1})

  };

  setDocsLimit = (newLimit) => {
    let { docs } = this.state.navigationDetails;
    if(newLimit === docs) return;

    this.loadProducts(this.state.currentCategory, {docs: newLimit, page: 1});
  }

  firstPage = () => {
    let { docs, page } = this.state.navigationDetails;
    if(page === 1) return;

    this.loadProducts(this.state.currentCategory, {docs, page: 1});
  }

  lastPage = () => {
    let { docs, page, pages } = this.state.navigationDetails;
    if(page === pages) return;
    
    this.loadProducts(this.state.currentCategory, {docs, page: pages});
  }

  nextPage = () => {
    let {page, pages, docs} = this.state.navigationDetails;
    if(page === pages) return;

    this.loadProducts(this.state.currentCategory, {docs, page: page + 1});
  }

  previousPage = () => {
    let {page, docs} = this.state.navigationDetails;
    if(page === 1) return;

    this.loadProducts(this.state.currentCategory, {docs, page: page - 1});
  }

  toggleListStyle = () => {
    let listStyle = this.state.listStyle === 'grid' ? 'list' : 'grid';
    this.setState({ listStyle })
  };

  renderNavigationOptions = () => {
    let icon = this.state.listStyle === "grid" ? "th-large" : "bars";

    return (
      <Col xs="12" className="mb-3 mt-3 mt-lg-0">
        <div className="d-flex justify-content-between">
          <div>
            <DropdownButton variant="dark" title="Produtos Por Página">
              <Dropdown.Item as="button" onClick={() => this.setDocsLimit(10)}>10</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => this.setDocsLimit(25)}>25</Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => this.setDocsLimit(50)}>50</Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="d-flex align-items-center">
            <Button 
              variant="dark" 
              className="display-4 rem-2 mr-1" 
              onClick={this.firstPage}
            >
              1
            </Button>

            <Button variant="outline-dark" onClick={this.previousPage}>
              <FontAwesomeIcon icon='arrow-left' />
            </Button>

            <span className="display-4 rem-4 green mx-3">
              {this.state.navigationDetails.page}
            </span>

            <Button variant="outline-dark" onClick={this.nextPage}>
              <FontAwesomeIcon icon='arrow-right' />
            </Button>

            <Button 
              variant="dark" 
              className="display-4 rem-2 ml-1" 
              onClick={this.lastPage}
            >
              {this.state.navigationDetails.pages}
            </Button>
          </div>

          <div>
            <Button
              variant="dark"
              onClick={this.toggleListStyle}
            >
              <FontAwesomeIcon icon={icon} />
            </Button>
          </div>
        </div>
      </Col>
    );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg="3">
            <ListGroup>
              {getCategories().map((category, idx) => (
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
              {this.renderNavigationOptions()}

              <ListaProdutos 
                products={this.state.currentProducts} 
                listStyle={this.state.listStyle} 
              />

              {this.renderNavigationOptions()}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
