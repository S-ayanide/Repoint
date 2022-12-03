import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Repoint</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart ? <Cart /> : null}
    </div>
  );
};

export default NavBar;
