import React, { createContext, useContext, useState } from 'react';

interface IContext {
  children: React.ReactNode;
}

export interface IData {
  showCart: boolean;
  cartItems: number;
  totalPrice: number;
  totalQuantities: number;
  qty: number;

  increaseQuantity: () => void;
  descreaseQuantity: () => void;
}

export const StateContext = createContext<IData>({} as IData);

export const StateContextProvider = ({ children }: IContext) => {
  const [showCart, setshowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
