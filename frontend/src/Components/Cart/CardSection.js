import React, { Component } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './Cart.css';


import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'


const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "20px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      Name : this.name,
      Email : this.email,


      CARD_ELEMENT_OPTIONS : this.CARD_ELEMENT_OPTIONS
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/cart/shopping-cart', {
      withCredentials: true,
    })
      .then((result) => {
        this.setState({
          items: result.data,
          isLoaded: true
        });

      });


  }

  render() {
    const { items } = this.state;


    if (!this.state.isLoaded || items.products == null || items.products.length === 0) {
      items.totalPrice = items.totalPrice*100;
      return (
        <>
          <div className="cart">

          </div>

          <div className="row py-5 p-4 bg-white rounded shadow-sm">

            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Résumé de commande</div>
              <div className="p-4">
                <p className="mb-4"><em>Les coûts supplémentaires sont calculés sur base du montant de votre commande.</em></p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                    <h5 className="fw-bold">{items.totalPrice}€</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
    }
    return (
      <div className="cart py-5">
        <div className="container px-4 px-lg-5 mb-5">
          <div className="row">

          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Résumé de commande</div>
            <div className="p-4">
              <p className="mb-4"><em>Les coûts supplémentaires sont calculés sur base du montant de votre commande.</em></p>
              <p className="mb-4"><em>Les paiements sont réalisés via Stripe</em></p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                  <h5 name="amount" className="fw-bold"><span id='totalPrice'>{items.totalPrice}</span>€</h5>
                </li>
              </ul>

            </div>

          </div>
          <div className="col-lg-6">
            <div id="sectionInfo">
            <div className="errorSection"></div>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Information de paiement</div>
              <div class="input-wrapper">
                <input name="name" type="text" id="input" className=" form-control" placeholder="Name" />
                <label for="input" class="control-label">Full name</label>
                <input name="email" type="text" id="input" className="form-control" placeholder="Email" />
                <label for="input" class="control-label">Email</label>


                <label>
                  <CardElement options={CARD_ELEMENT_OPTIONS} />
                </label>
                <button id="btnPay" type="submit" className="btn btn-dark btn-lg btn-block" name="totalPrice">Payer <span name="amount" id='totalPrice'>{items.totalPrice}</span> €</button>
              </div>
              <a href="/Panier" className="btn btn-dark btn-lg btn-block">Retour</a>
            </div>

          </div>

        </div>


      </div>

      </div>


    )
  }
}

export default Cart;
