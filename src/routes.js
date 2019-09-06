import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Eshop from "./pages/Eshop";
import Produto from "./pages/Produto";
import Footer from "./components/Footer";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/eshop" component={Eshop} />
      <Route path="/produto/:id" component={Produto} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
