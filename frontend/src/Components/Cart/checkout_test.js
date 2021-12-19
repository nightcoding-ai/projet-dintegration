import React, { Component } from "react";
import './Register.css';
import axios from 'axios';
import Stripe from "stripe";
import {loadStripe} from "@stripe/stripe-js"
export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            cardHolder: '',
            cardNumber: '',
            expiMonth:'',
            expiYear:'',
            CVC:'',
            items:[],
            token: '',
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/cart/shopping-cart',{
            withCredentials:true,
            })
            .then((result) => {
                this.setState({
                    items: result.data,
                });
            });
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    createToken() {
        var stripe = loadStripe('pk_test_51K7oKVAmHmiFCRWpil7DYPSOJC6ZRUd7UNXs0HTKJtuhzfMd3Ko0ZY6qns7SOvxDU2408Hsskoa2uVmkoFkRdXU300TT1KGYnQ');
        stripe.createToken(this.state).then(({err, token}) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(token)
            }
        })
    }
        
    
    handleSubmit = e => {
    e.preventDefault();
    const { name, address, cardHolder, cardNumber, expiMonth, expiYear, CVC, token } = this.state;
    this.createToken()
    const order = {
        name,
        address,
        cardHolder,
        cardNumber,
        expiMonth,
        expiYear,
        CVC, 
        token,
    };
    console.log(order);
    axios
      .post('http://localhost:5000/api/cart/checkout', order, {
        withCredentials:true,
        order
        })
      .then(() => console.log('Order Created'))
      .catch(err => {
        console.error(err);
      });
  };
    
    render() {
        const { items } = this.state;
        return (
        <>
        <h1>Checkout</h1>
            <h4>Your Total: {items.totalPrice}€</h4>
            <div id="charge-error" class="alert alert-danger {{#if noError}}hidden{{/if}}">
                {items.errMsg}
            </div>
            <form id='checkout-form'>
                <h3>Inscription</h3>

                <div className="form-group">
                    <label>Nom</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    id="name"
                    placeholder="Nom"
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Adresse</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="address"
                    id="address"
                    placeholder="Votre adresse"
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Détenteur de la carte</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="cardHolder"
                    id="card-name"
                    placeholder="Nom du titulaire"
                    onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Numéro de carte</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    name="cardNumber"
                    id="card-number"
                    placeholder="XXX"
                    onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Expire le :</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    name="expiMonth"
                    id="card-expiry-month"
                    placeholder="numéro du mois"
                    onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Expire le :</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    name="expiYear"
                    id="card-expiry-year"
                    placeholder="20XX"
                    onChange={this.handleInputChange}/>
                </div>              
                <div className="form-group">
                    <label>CVC</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    name="CVC"
                    id="card-cvc"
                    placeholder="Cryptogramme à 3 chiffres"
                    onChange={this.handleInputChange}/>
                </div>

                <button 
                type="submit" 
                onClick={this.handleSubmit} 
                className="btn btn-dark btn-lg btn-block register">
                    Payer
                </button>
            </form>
            </>
        );
    }
}