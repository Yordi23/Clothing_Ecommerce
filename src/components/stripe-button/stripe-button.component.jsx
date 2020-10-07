import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publickey =
    "pk_test_51GxDYJF2UTDM6hXNBFbtzHJ4tA0Eq4csKzY4bQNGBlDy5Ue7opzA8YAojHmZB63xrhcH7h3bVSNfzx1ym8Rgjpm300Z2xKk7Kz";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Y.D. Clothing"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publickey}
    />
  );
};

export default StripeCheckoutButton;
