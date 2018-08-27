import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
// import Products from './components/Products';
import Footer from './components/Footer';

import Home from './components/Home';
import Terms from './components/Terms';
import About from './components/About';
import AllProducts from './components/AllProducts';
import Category from './components/Category';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route exact path='/terms' component= { Terms } />
          <Route exact path='/about' component= { About } />
          <Route exact path='/all-products' component= { AllProducts } />
          <Route path='/category/:categoryName' component= { Category } />
          <Route path='/product/:prodId' component= { Product } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
