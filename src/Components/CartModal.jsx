// CartModal.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartModal.css"

const CartModal = ({ closeModal }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
