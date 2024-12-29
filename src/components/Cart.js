import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <p>{cart[0]?.name || 'Product'} - ${cart[0]?.price || '100'}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
