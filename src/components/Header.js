import React, { Component } from 'react'
import mfLogoWhite from '../images/mf-logo-white.svg'
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav>  
            <ul className='menu'>
                <li><Link id='white' to='/'><img src={ mfLogoWhite } alt=''></img></Link></li>
                <li><Link id='white' to='/about'>About</Link></li>
                <li><Link id='white' to='/terms'>Terms + Conditions</Link></li>
            </ul>
            <ul className='menu'>
                <hr></hr>
                <li><Link to='/all-products'>All</Link></li>
                <li><Link to='/category/seating'>Seating</Link></li>
                <li><Link to='/category/tables'>Tables</Link></li>
                <li><Link to='/category/desks'>Desks</Link></li>
                <li><Link to='/category/storage'>Storage</Link></li>
                <li><Link to='/category/bedroom'>Bedroom</Link></li>
                <li><Link to='/category/miscellaneous'>Misc</Link></li>
                <hr></hr>
            </ul>
            <div className='shopping'>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
        </nav>
      </div>
    )
  }
}
