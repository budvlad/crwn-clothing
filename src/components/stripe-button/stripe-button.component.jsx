import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) => {
  const priceForStripe  = price * 100;
  const publishablekey = 'pk_test_gNv6R3DZJg4fuv8nwjPaQNlW00c8phcfI0';

  const onToken = token => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panellabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  )
}

export default StripeCheckoutButton;