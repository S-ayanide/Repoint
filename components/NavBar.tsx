import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Repoint</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => void 0}>
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default NavBar;
