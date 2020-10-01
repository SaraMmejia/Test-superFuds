import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import GetData from "./components/GetData";
import { CartProvider } from "./CartContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <CartProvider>
            <GetData />
            <NavBar />
            <Route exact path="/" component={Slider} />
            <Route exact path="/Cart" component={ShoppingCart} />
          </CartProvider>
          <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
