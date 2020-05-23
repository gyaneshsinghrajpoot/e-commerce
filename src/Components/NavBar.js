import React, { Component} from 'react';
import {Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class NavBar extends Component{
    render(){
        return(
           <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
              <img src="app\e-commerce\iconfinder_Essentials_phone_telephone_vintage_5298737.png" alt="store"></img>
            <Link to='/'>
                <img src={logo} alt='store' className="navbar-brand" />
            </Link>
           </nav>
        )
    }
}