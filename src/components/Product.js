import React, { Component } from 'react'
import request from 'superagent';

import './styles/Product.css';

export default class Product extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: "",
      img: "",
      price: 0,
      cond: "",
      w: 0,
      h: 0,
      l: 0,
    }


    const API = `https://mallory-furniture-admin.now.sh/api/v1/products/${ props.match.params.prodId }`;
    request
    .get(API)
    .then(response => {
      var product = response.body;
      this.setState({
        name:product.item,
        img: product.imageLink,
        price: product.price,
        cond: product.condition,
        w: product.width,
        h: product.height,
        l: product.length,
      })
    })

  }


  render() {
    return (
      <div className='product__id__container'>

        <div className='product__id__image__container'>
          <img className='product__id__image' src={ this.state.img } alt=''/>
        </div>
        
        <div className='product__id__card__container'>
          <div className='product__id__card'>
            
            <div className='product__id__card__name__container'>
              <a className='product__id__card__name'>{ this.state.name }</a>
            </div>
            <div className='product__id__card__price__container'>
              <a className='product__id__card__price'>${ this.state.price }</a>
            </div>
            <hr className='solo'/>
            <div className='cardInner'>
              <div className='cardInner__condition'>
                <p>Condition</p>
                <span>{ this.state.cond }</span>
              </div>
              <div className='cardInner__measurements'>
                <p>Measurements</p>
                <span>W:{ this.state.w }| L:{ this.state.l }| H:{ this.state.h }</span>
              </div>
              <div className='cardInner__button'>
                <button className='addToCart'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
