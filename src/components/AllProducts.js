import React, { Component } from 'react'
import request from 'superagent';

import './styles/AllProducts.css';

import { Link } from 'react-router-dom';

export default class AllProducts extends Component {


  constructor (props) {
    super (props)


    //Estado por default
    this.state= {
        products: []
    }
}


    //API
    getProducts = () => {

        var API = 'https://mallory-furniture-admin.now.sh/api/v1/products';

        request.get(API)
        .then(response=> {


            //Estado sobreescrito
            this.setState({products:response.body})
            
            // console.log(response.body);
        })
    }


    //Ejecución de la función para la API
    componentDidMount() {
        this.getProducts()
    }
    //API


    //Función para filtrar
    filterProducts = () => {

        const newListFilter = this.state.products.filter(product => product.onSale === true)
        this.setState ({
            products: newListFilter
        })

    }



  render() {
    return (
      <div>
        <div className='titles'>
            <h1>All products</h1>
            <h3>All available listings</h3>
        </div>
        
        <div className='filter__buttons__container'>
        {/* Se llama a la función para que se active con el click en el botón */}
          <button className='filter__button__all' onClick= {this.getProducts}>All Items</button>
          <button className='filter__button__sale' onClick= {this.filterProducts} >On Sale</button>
        </div>

        <div className='number__items__container'>
          <a className='number__items'>{ this.state.products.length }</a>
          <h3 className='text__showing'>items showing</h3>
        </div>
        
        <div className='big__products__container'>

          {/* Map del API (Iteración) */}
            { this.state.products.map(product => {


                    //Dibujo de cada tarjeta
                    return (
                        
                        <div className='product__container'>
                            <Link to={`product/${ product._id}`}>
                                <div className='product__image__container'>
                                    <img className='product__image' src={ product.imageLink } alt=''></img>
                                </div>
                                <div className='product__info__container'>
                                    <p className='product__description'> { product.item } </p>
                                    <p id='product__price'> ${ product.price } </p>
                                </div>
                            </Link>
                        </div>
                        
                    )


            }) 

            }

        </div>
      </div>
    )
  }
}
