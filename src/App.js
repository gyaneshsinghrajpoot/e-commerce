import React from 'react';
import {Switch , Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Product from './Components/Product'
import ProductList from './Components/ProductList'
import Default from './Components/Default'

class App extends React.Component {
  render(){
  return (
    <React.Fragment>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route component={Default}/>

    </Switch>
  </React.Fragment>
  );
}
}
export default App;
