import React from "react";

import { login, logout } from "../../services/user.service";
import { Button } from "react-bootstrap";

export default class LoginButton extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.setState({ loggedIn: !!localStorage.getItem("loggedin") });
  }

  handleClick = () => {
    if (!!localStorage.getItem("loggedin")) {
      logout();
    } else {
      login();
    }

    this.setState({ loggedIn: !!localStorage.getItem("loggedin") });
  };

  render() {
    let buttonText = !!localStorage.getItem("loggedin") ? "Logout" : "Login";

    return (
      <Button
        variant="outline-dark"
        onClick={this.handleClick}
        className="float-right"
      >
        {buttonText}
      </Button>
    );
  }
}
