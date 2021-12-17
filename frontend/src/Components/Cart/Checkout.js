import React, { Component } from 'react'

import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/cart/shopping-cart',{
            withCredentials:true,
            })
            .then((result) => {
            this.setState({
                items: result.data,
                isLoaded:true
            });
        });
        axios.get('http://localhost:5000/api/cart/Checkout',{
            withCredentials:true,
            })
            .then((result) => {
            this.setState({
                items: result.data,
                isLoaded:true
            });
        });
    }
    cleanUp(){
        axios.get('http://localhost:5000/api/cart/purge',{
            withCredentials:true,
            }
        )
        window.location.reload(false);
    }
    deleteArticle = (e) => {
        alert("l'id du produit : "+ e.currentTarget.id);
    }
    render() {
        const { items } = this.state;
        console.log(items)


            return(
                <div className="cart">
                <div class="py-5">
                <div class="row py-5 p-4 bg-white rounded shadow-sm">
                <div class="col-lg-6">
                        <h1>Checkout</h1>


                        <form action="/checkout" method="post" id="checkout-form">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" class="form-control" required name="name"></input>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="address">Address</label>
                                        <input type="text" id="address" class="form-control" required name="address"/>
                                    </div>
                                </div>

                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="card-name">Card Holder Name</label>
                                        <input type="text" id="card-name" class="form-control" required/>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="card-number">Credit Card Number</label>
                                        <input type="text" id="card-number" class="form-control" required/>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <div class="form-group">
                                                <label for="card-expiry-month">Expiration Month</label>
                                                <input type="text" id="card-expiry-month" class="form-control" required/>
                                            </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="form-group">
                                                <label for="card-expiry-year">Expiration Year</label>
                                                <input type="text" id="card-expiry-year" class="form-control" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="card-cvc">CVC</label>
                                        <input type="text" id="card-cvc" class="form-control" required/>
                                    </div>
                                </div>

                            </div>
                    </form>
                    </div>
                    <div class="col-lg-5">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Résumé de commande</div>
                            <div class="p-4">
                            <p class="mb-4"><em>Les coûts supplémentaires sont calculés sur base du montant de votre commande.</em></p>
                            <ul class="list-unstyled mb-4">
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Sous-total </strong><strong>{items.totalPrice}€</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Taxe</strong><strong>0€</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                <h5 class="fw-bold">{items.totalPrice}€</h5>
                                </li>
                            </ul><a href="/Checkout" class="btn btn-dark rounded-pill py-3 d-md-block">Passer au paiement</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                );
            }
        }
    ;

export default Checkout;
