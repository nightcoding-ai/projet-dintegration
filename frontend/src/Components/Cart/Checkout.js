import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51K7oKVAmHmiFCRWpil7DYPSOJC6ZRUd7UNXs0HTKJtuhzfMd3Ko0ZY6qns7SOvxDU2408Hsskoa2uVmkoFkRdXU300TT1KGYnQ');

function Checkout() {
  return (

    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>

  );
};

export default Checkout;