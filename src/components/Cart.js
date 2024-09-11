
import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems'
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className='h-auto m-4 w-auto text-center font-serif text-xl p-6 bg-gradient-to-r from-blue-50 to-slate-100'>
      This is the cart page...
      {cartItems.length > 0 ? (
        <CartItems items={cartItems} />
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
