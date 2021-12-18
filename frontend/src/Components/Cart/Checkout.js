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
                <div class="row">
                    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
                    <script type="text/javascript" src="../../../public/javascript/checkout.js"></script>
                    <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                        <h1>Checkout</h1>
                        <h4>Your Total: ${items.totalPrice}</h4>
                        <div id="charge-error" class="alert alert-danger {{#if noError}}hidden{{/if}}">
                            {items.errMsg}
                        </div>
                        <form action="/checkout" method="post" id="checkout-form">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" class="form-control" required name="name"/>
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
                            <button type="submit" class="btn btn-success">Buy now</button>
                        </form>
                    </div>

                </div>
)}}

export default Checkout;
