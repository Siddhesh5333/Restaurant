import React, { useState, useContext } from "react";
import "./ItemModal.css";
import { CartContext } from "./CartContext"; // Import CartContext

const ItemModal = ({ item, closeModal }) => {
  const [quantity, setQuantity] = useState(1); // Quantity counter
  const [addOns, setAddOns] = useState([]); // Track selected add-ons
  const { addToCart } = useContext(CartContext); // Access addToCart from context

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value)); // Ensure value is a number
  };

  // Handle add-on selection
  const handleAddOnChange = (e, addOn) => {
    setAddOns((prevAddOns) =>
      prevAddOns.includes(addOn)
        ? prevAddOns.filter((existingAddOn) => existingAddOn !== addOn)
        : [...prevAddOns, addOn]
    );
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const cartItem = {
      ...item,
      quantity,
      addOns,
    };
    addToCart(cartItem); // Add item to the cart using context
    closeModal(); // Close the modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Item Image */}
        <div className="item-img-container">
          <img src={item.img} alt={item.name} className="item-img" />
        </div>

        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span>₹ {item.price}</span>

        {/* Add-ons Section */}
        <div className="extras">
          <h4>Add Ons</h4>
          <div className="add-ons-container">
            <div className="add-ons-left">
              {item.addOns.slice(0, Math.ceil(item.addOns.length / 2)).map((addOn) => (
                <div key={addOn.name}>
                  <input
                    type="checkbox"
                    value={addOn.name}
                    onChange={(e) => handleAddOnChange(e, addOn)}
                  />
                  {addOn.name} (+₹{addOn.price})
                </div>
              ))}
            </div>
            <div className="add-ons-right">
              {item.addOns.slice(Math.ceil(item.addOns.length / 2)).map((addOn) => (
                <div key={addOn.name}>
                  <input
                    type="checkbox"
                    value={addOn.name}
                    onChange={(e) => handleAddOnChange(e, addOn)}
                  />
                  {addOn.name} (+₹{addOn.price})
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantity Section */}
        <div className="quantity">
          <h4>Quantity</h4>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        </div>

        {/* Action Buttons */}
        <div className="modal-buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
