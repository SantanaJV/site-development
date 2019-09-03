import React from "react";

import { Jumbotron } from "react-bootstrap";

import Produtos from "../../components/Produtos";

export default class Eshop extends React.Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1>Sistema de pagamento integrado via Gerencianet!</h1>
          <p>
            Você só precisa se cadastrar no serviço, deixe a implementação
            comigo. Fácil de usar e administrar, o dinheiro é totalmente
            gerenciado por você pela plataforma da Gerencianet! Pagamentos via
            boleto ou cartão de crédito.
          </p>
        </Jumbotron>
        <Produtos />
      </>
    );
  }
}
