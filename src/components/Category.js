import React, { Component } from 'react'
import categoryImage from '../images/category-seating.png'
import { Switch, Route, Link } from 'react-router-dom';

import './styles/Category.css';

import request from 'superagent';



export default class Category extends Component {

    constructor (props) {
        super (props)
    
    
        //Estado por default
        this.state= {
            products: []
        }
        //Cambia el estado
        this.getCategory(props.match.params.categoryName)
    }


    componentWillReceiveProps(newProps) {
        this.setState({
          products: []
        })
        this.getCategory(newProps.match.params.categoryName)
      }
  
    
    
    //API
    getCategory = (categoryName) => {

    //Otra opción de obtener API dinámica
        // var API = 'https://mallory-furniture-admin.now.sh/api/v1/products?category='+categoryName;
        // Construcción de API dinámica
        var API = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${ categoryName }`;
    
        request.get(API)
        .then(response=> {
    
    
            //Estado sobreescrito
            this.setState({products:response.body})
            
            console.log(response.body);
        })
    }
    
    // //Ejecución de la función para la API
    // componentDidMount() {
    //     this.getCategory()
    // }
    // //API


    //Función para filtrar
    filterProducts = () => {

        const newListFilter = this.state.products.filter(product => product.onSale === true)
        this.setState ({
            products: newListFilter
        })

    }


  render(props) {
    return (
        <div className='home__container'>
            <div className='image__container'>
                <img src={ categoryImage }></img>
            </div>
            <div className='titles'>
                <h1>{ this.props.match.params.categoryName.toUpperCase() }</h1>
                <h3>All { this.props.match.params.categoryName } products</h3>
            </div>

            <div className='filter__buttons__container'>
                {/* Se llama a la función para que se active con el click en el botón */}
                {/* <button id='filter__button__all__category' onClick= {this.getProducts( props.match.params.categoryName ) }>All Items</button> */}
                <button id='filter__button__sale__category' onClick= {this.filterProducts} >On Sale</button>
            </div>

            <div className='number__items__container'>
                <a className='number__items'>{ this.state.products.length }</a>
                <h3 className='text__showing'>items showing</h3>
            </div>



            <div className='big__products__container'>

                {/* Map del API (Iteración) */}
                { this.state.products.map(product => {

                    // //Condición
                    // if(product.category === 'seating') {

                        //Dibujo de cada tarjeta
                        return (
                            <div className='product__container'>
                                <Link to={`product/${ product._id}`}>
                                    <div className='product__image__container'>
                                        <img className='product__image' src={ product.imageLink }></img>
                                    </div>
                                    <div className='product__info__container'>
                                        <p className='product__description'> { product.item } </p>
                                        <p id='product__price'> ${ product.price } </p>
                                    </div>
                                </Link>
                            </div>
                            
                        )

                    // }

                }) 

                }

            </div>
        </div>
    )
  }
}
