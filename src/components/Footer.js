import React, { Component } from 'react'
import mfLogoBlack from '../images/mf-logo-black.svg'
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='logo'>
          <Link to='/'><img src={ mfLogoBlack } alt=''></img></Link> 
        </div>
        <hr id='hr__footer'></hr>
        <div className='footer__container__menus'>
          <ul className='footer__menu'>
            Company
            <li><Link to='/about'>About</Link></li>
            <li><a href=''>Press</a></li>
            <li><Link to='/terms'>Terms + Conditions</Link></li>
          </ul>
          <ul className='footer__menu'>
            Categories
            <li><Link to='/category/seating'>Seating</Link></li>
            <li><Link to='/category/tables'>Tables</Link></li>
            <li><Link to='/category/miscellaneous'>Misc</Link></li>
          </ul>
          <ul className='footer__menu'></ul>
          <ul className='footer__social'>
            Social
            <br></br>
            <li id='social'>
              <a href=''>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li id='social'>
              <a href=''>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li id='social'>
              <a href=''>
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
