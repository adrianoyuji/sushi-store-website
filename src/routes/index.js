import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import ShoppingCart from "../pages/ShoppingCart";

export default function Routes() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
