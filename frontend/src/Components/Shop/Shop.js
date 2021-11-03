import React, { Component } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom';
import './Shop.css';
//import './Toast.js';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/products')
            .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        });
    }
    render() {
        const { items } = this.state;
        if (!this.state.isLoaded) {
          return <div>Chargement ... </div>;
        } else {
          return (
            <div class="container py-5">
                <div className="mb-5">
                    <h1 className='title'>Articles</h1>
                </div>
                <div class="row">
                    <div class="col-lg-7 mx-auto">
                    <ul className="list-group shadow">
                    {items.map((product) => (
                        <li className="list-group-item">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h3 className="mt-4 font-weight-bold mb-2">{product.name}</h3>
                                    <p className="text-muted">{product.description}</p>
                                    <h5 className="font-weight-bold my-2">{product.price}€</h5>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <div className='box "my-3'>
                                        <img src={product.image} alt={product.name} width="150" className='picture'/>
                                    </div>
                                    <div className="my-3">
                                        <button type="button" className="btn btn-outline-success">Ajouter au panier</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                    </ul>
                    </div>
                </div>
            </div>
          );
        }
    }
}

export default Shop;


