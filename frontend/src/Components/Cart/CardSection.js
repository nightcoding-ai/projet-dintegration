import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import './Cart.css'
const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
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
function CardSection() {
  return (
  <>
    <div className='form_test'>
        <label>
            Name
            <input name="name" type="text" placeholder="Jane Doe" required />
        </label>
        <label>
            Email
            <input
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
            required
            />
        </label>
        <label>
            Card details
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <button type="submit" className="btn btn-dark btn-lg btn-block">Payer</button>
        </label>
    </div>
  </>
  );
};
export default CardSection;