import  React, { Component } from 'react';

import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <Carousel>
              <Carousel.Item>
                <img 
                  className="d-block w-100" 
                  src={'holder.js/1000x400?text=João Santana&bg=373940'}
                  alt="First Slide"
                />
                <Carousel.Caption>
                  <h3>Desenvolvedor e Freelancer</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100" 
                  src={'holder.js/1000x400?text=Para todas as plataformas&bg=373940'}
                  alt="First Slide"
                />
                <Carousel.Caption>
                  <h3>Serviço excelente por um baixo custo!</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100" 
                  src={'holder.js/1000x400?text=O limite é a sua imaginação!&bg=373940'}
                  alt="First Slide"
                />
                <Carousel.Caption>
                  <h3>Modifique, crie, dê luz à sua ideia!</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col md="4">
            <Card>
              <FontAwesomeIcon className="align-self-center my-3" color="red" icon="store" size="3x" />
              <Card.Body>
                <Card.Title>E-Shop</Card.Title>
                <Card.Text>Ótima experiência para o usuário, interface amigável e não poluída.</Card.Text>
                <Button variant="danger" href="/eshop">
                  <Link to="/eshop" className="link">Visitar loja</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <FontAwesomeIcon className="align-self-center my-3" color="green" icon="pencil-alt" size="3x" />
              <Card.Body>
                <Card.Title>Blog pessoal</Card.Title>
                <Card.Text>Fácil, simples, objetivo, descomplicado. A solução perfeita para o seu blog.</Card.Text>
                <Button variant="success">
                  <Link to="/blog" className="link">Visitar blog</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <FontAwesomeIcon className="align-self-center my-3" color="blue" icon="cogs" size="3x" />
              <Card.Body>
                <Card.Title>O que der na telha!</Card.Title>
                <Card.Text>Dê a sua ideia, e a veja se tornar realidade!</Card.Text>
                <h5>Entre em contato agora mesmo!</h5>
                <Card.Text>(13) 99191-8087</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}