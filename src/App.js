import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Product from './Components/Product'
import ProductList from './Components/ProductList'
import Default from './Components/Default'







function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <ProductList/>
    <Details/>
    <Cart/>
    <Default/>
  </React.Fragment>
  );
}
export default App;
