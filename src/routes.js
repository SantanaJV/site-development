import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Eshop from './pages/Eshop';
import Footer from './components/Footer';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/eshop" component={Eshop} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default Routes;