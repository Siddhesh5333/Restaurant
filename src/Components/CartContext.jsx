import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        // If item exists, update quantity and total price
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity = item.quantity;
        updatedCart[existingItemIndex].totalPrice = item.totalPrice; // Update total price
        return updatedCart;
      } else {
        // If item is new, add it
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
