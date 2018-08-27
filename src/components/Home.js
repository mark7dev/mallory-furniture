import React, { Component } from 'react'
import lanImage from '../images/landing-splash-bg.png'
import { Switch, Route, Link } from 'react-router-dom';

import request from 'superagent';

import './styles/Home.css';

export default class Home extends Component {


    //Estado para guardar la info de la API
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




  render() {
    return ( 
      <div className='home__container'>
        <div className='image__container'>
            <img src={ lanImage }></img>
            <div className='image__text'>
                <h1>Mallory Furniture</h1>
                <h3>Your furniture is old.</h3>
                <h3>Ours is older.</h3>
            </div>
        </div>
        <div className='titles'>
            <h1>Featured Products</h1>
            <h3>Check out some of our favorite listings</h3>
        </div>
        <div className='big__products__container'>

            {/* Map del API (Iteración) */}
            { this.state.products.map(product => {

                //Condición
                if(product.featured === true) {

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

                }

            }) 

            }

        </div>
        <br></br>
        <br></br>
        <div className='buttons__container1'>
            <Link to='/all-products'><button>All Products</button></Link>
        </div>
        <div className='titles'>
            <h1>Browse by Categories</h1>
            <h3>Explore by furniture type.</h3>
        </div>
        <br></br>
        <br></br>
        <div className='buttons__container2'>
            <Link to='/category/seating'><button>Seating</button></Link>
            <Link to='/category/tables'><button>Tables</button></Link>
            <Link to='/category/desks'><button>Desks</button></Link>
            <Link to='/category/bedroom'><button>Bedroom</button></Link>
            <Link to='/category/storage'><button>Storage</button></Link>
            <Link to='/category/miscellaneous'><button>Misc</button></Link>
        </div>
      </div>
    )
  }
}
