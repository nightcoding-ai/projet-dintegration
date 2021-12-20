import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import './Cart.css';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

   function stripeTokenHandler (token) {
      const paymentData = {token: token.id};
      console.log(paymentData)
   }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }
     const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: event.target.name.value,
        email: event.target.email.value
      }

    });
    console.log(payload)
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      stripeTokenHandler(result.token);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardSection />
    </form>
  );
}

export default CheckoutForm;