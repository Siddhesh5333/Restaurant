import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartModal.css";

const CartModal = ({ closeModal }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // CartModal.js

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      // Parse the add-on prices as numbers
      const addOnTotal = item.addOns.reduce((sum, addOn) => sum + parseFloat(addOn.price || 0), 0);
  
      // Parse the item's price and calculate total for that item
      const itemPrice = parseFloat(item.price || 0);
      const itemTotal = (itemPrice + addOnTotal) * (item.quantity || 1);
  
      // Add the item's total to the overall subtotal
      return total + itemTotal;
    }, 0);
  };
  
  


  const deliveryCharge = 3.5; // Example delivery charge
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryCharge;

  const handleQuantityChange = (item, operation) => {
    const updatedItem = { ...item };

    // Increase or decrease the quantity
    if (operation === "increment") {
      updatedItem.quantity += 1; // Increase the quantity
    } else if (operation === "decrement") {
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1; // Decrease the quantity
      }
    }

    // Update the cart with the new quantity
    addToCart(updatedItem);
  };

  const handleRemoveItem = (itemId) => {
    // Remove item from cart by id
    removeFromCart(itemId);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {/* Item Details Section */}
            <div className="cart-items">
  {cart.map((item, index) => (
    <div className="cart-item" key={index}>
      <img src={item.img} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        {item.addOns.length > 0 && (
          <div className="add-ons-list">
           {item.addOns.length > 0 && (
  <div className="add-ons-text">
    <p>Extras: {item.addOns.map((addOn, i) => `${addOn.name} (+₹${addOn.price})`).join(", ")}</p>
  </div>
)}
          </div>
        )}
      </div>
      <div className="item-quantity">
        {!item.isNewItem && (
          <>
            <button className="quantity-btn" onClick={() => handleQuantityChange(item, "decrement")}>
              -
            </button>
            <span>{item.quantity}</span>
            <button className="quantity-btn" onClick={() => handleQuantityChange(item, "increment")}>
              +
            </button>
          </>
        )}
      </div>
      <div className="item-total-price">
      </div>
      <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>
        Remove
      </button>
    </div>
  ))}
            </div>

            <div className="Bill">
              <h3>Total Bill</h3>
            </div>

            {/* Cart Summary Section (Subtotal, Delivery, and Total) */}
            <div className="cart-summary">
            <div className="item-breakdown">
  {cart.map((item, index) => {
    // Calculate the add-on total for the item
    const addOnTotal = item.addOns.reduce((sum, addOn) => sum + parseFloat(addOn.price || 0), 0);

    // Calculate the total price for the item including add-ons
    const itemPrice = parseFloat(item.price || 0);
    const itemTotal = (itemPrice + addOnTotal) * (item.quantity || 1);

    return (
      <div className="breakdown-item" key={index}>
        <p>
          {item.name} {item.quantity} x ₹{itemPrice}{" "}
          {item.addOns.length > 0 &&
            `+ ${item.addOns
              .map((addOn) => `${addOn.name} (₹${addOn.price})`)
              .join(" + ")}`}{" "}
          = ₹{itemTotal.toFixed(2)}
        </p>
      </div>
    );
  })}
</div>

              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Taxes: ₹{deliveryCharge.toFixed(2)}</p>
              <h3>Total: ₹{total.toFixed(2)}</h3>
            </div>
          </>
        )}
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
