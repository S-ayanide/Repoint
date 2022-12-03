import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Product } from '../models/Products';

interface IContext {
  children: React.ReactNode;
}

interface IAddToCart {
  product: Product;
  quantity: number;
}

export interface IData {
  showCart: boolean;
  cartItems: Product[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;

  increaseQuantity: () => void;
  descreaseQuantity: () => void;
  addToCart: ({ product, quantity }: IAddToCart) => void;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StateContext = createContext<IData>({} as IData);

export const StateContextProvider = ({ children }: IContext) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const addToCart = ({ product, quantity }: IAddToCart) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCardItems = cartItems.map((cartItem) => {
        if (cartItem._id === product._id)
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
      });

      setCartItems(updatedCardItems as Product[]);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to cart`);
  };

  const increaseQuantity = () => {
    setQty((prev) => prev + 1);
  };

  const descreaseQuantity = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  return (
    <StateContext.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQuantity,
        descreaseQuantity,
        addToCart,
        setShowCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
