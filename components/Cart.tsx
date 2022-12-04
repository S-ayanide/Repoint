/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { ToggleCart } from '../models/Products';

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, removeFromCart } =
    useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button type="button" className="btn" onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id} className="product">
                <img src={urlFor(item.image[0]) as unknown as string} className="cart-product-image" alt={item.name} />
                <div className="item-desc">
                  <div className="flex top">
                    <h3>{item.name}</h3>
                    <h3>₹{item.price.toFixed(2)}</h3>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={() => toggleCartItemQuantity(item._id, ToggleCart.DECREMENT)}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num" onClick={() => void 0}>
                          {item.quantity}
                        </span>
                        <span className="plus" onClick={() => toggleCartItemQuantity(item._id, ToggleCart.INCREMENT)}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button type="button" className="remove-item" onClick={() => removeFromCart(item)}>
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>₹{totalPrice.toFixed(2)}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={void 0}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
