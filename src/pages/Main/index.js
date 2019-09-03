import  React, { Component } from 'react';

import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';

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
        <Row className="mt-5">
          <Col md="4">
            <Card>
              <img src="holder.js/64x64" className="mt-3 rounded mx-auto d-block" />
              <Card.Body>
                <Card.Title>E-Shop</Card.Title>
                <Card.Text>Ótima experiência para o usuário, interface amigável e não poluída.</Card.Text>
                <Button variant="primary">Visitar loja</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <img src="holder.js/64x64" className="mt-3 rounded mx-auto d-block" />
              <Card.Body>
                <Card.Title>Blog pessoal</Card.Title>
                <Card.Text>Fácil, simples, objetivo, descomplicado. A solução perfeita para o seu blog.</Card.Text>
                <Button variant="primary">Visitar blog</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <img src="holder.js/64x64" className=" mt-3 rounded mx-auto d-block" />
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