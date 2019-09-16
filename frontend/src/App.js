import React from 'react';
import './App.css';
import FixedMenuLayout from './FixedMenuLayout';
import Cart from './Cart';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cart: []
    }
  }

  addToCart = (item) => {
    let new_cart = this.state.cart;
    new_cart.push(item);
    console.log(item)
    this.setState({
      cart: new_cart
    })
  }
  deleteFromCart = (id) => {
    let removeIndex = this.state.cart.map(function(item) { return item.id; }).indexOf(id);
    let new_cart = this.state.cart;
    new_cart.splice(removeIndex, 1)
    this.setState({
      cart: new_cart
    })
  }
  render(){
  return (
    <Router>
      <div>
        <Route exact path="/" render={props => <FixedMenuLayout addToCart={this.addToCart} cart={this.state.cart} />} />
        <Route path="/cart" render={props => <Cart deleteFromCart={this.deleteFromCart} cart={this.state.cart} />} />
        <Route path="/login" render={props => <LoginForm />} />
      </div>
    </Router>
  );
  }
}

export default App;
