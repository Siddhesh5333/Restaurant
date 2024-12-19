// Header.js
import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartModal from "./CartModal";
import "./Header.css"

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };

  return (
    <header className="header flex justify-between items-center py-4">
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">
          <i className="fas fa-hamburger"></i> DZYRIS
        </span>
      </div>
      <div className="flex items-center space-x-4">
      <button className="btn login-btn">
  <i className="fas fa-sign-in-alt"></i>
</button>

        <button className="btn" onClick={toggleCartModal}>
          <i className="fas fa-shopping-cart"></i> {cart?.length || 0}
        </button>
      </div>

      {isCartModalOpen && <CartModal closeModal={toggleCartModal} />}
    </header>
  );
};

export default Header;
