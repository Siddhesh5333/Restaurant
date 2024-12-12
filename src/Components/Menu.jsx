import React, { useState } from "react";
import ItemModal from "./ItemModal"; // Import the ItemModal
import "./Menu.css";

const Menu = ({ restaurant, menuItems = [], addToCart }) => {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected menu item
  const [isModalOpen, setIsModalOpen] = useState(false); // Track if the modal is open

  // Get unique types of menu items dynamically
  const menuTypes = ["All", ...new Set(menuItems.map((item) => item.type))];

  // Filter menu items based on the selected category
  const filteredItems = menuItems.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  // Handle opening the modal when a menu item is clicked
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="menu my-8">
      <div className="menu-head">
        <h2 className="Restitle">{restaurant.name} - Menu</h2>
        <a href="/restaurant" className="back">Back to Restaurants</a>
      </div>

      {/* Filter Options */}
      <div className="filter-options">
        {menuTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`filter-btn ${filter === type ? "active" : ""}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Display filtered menu items */}
      {filteredItems.length === 0 ? (
        <p>No menu items available for {filter}.</p>
      ) : (
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="menu-card" onClick={() => handleItemClick(item)}>
              <img src={item.img} alt={`${item.name}`} className="menu-img" />
              <div className="menu-info">
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-desc">{item.description}</p>
                <span className="menu-price">₹ {item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display Item Modal */}
      {isModalOpen && selectedItem && (
        <ItemModal
          item={selectedItem}
          closeModal={handleCloseModal}
          addToCart={addToCart}
        />
      )}
    </section>
  );
};

export default Menu;
