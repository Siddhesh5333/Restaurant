import React, { useState } from "react";
import "./Menu.css";

const Menu = ({ restaurant, menuItems = [] }) => {
  const [filter, setFilter] = useState("All"); // Track selected filter

  // Filter menu items based on the selected category
  const filteredItems = menuItems.filter((item) => {
    if (filter === "All") return true; // Show all items if no filter is selected
    if (filter === "Burgers" && item.type === "Burger") return true;
    if (filter === "Sandwiches" && item.type === "Sandwich") return true;
    if (filter === "Beverages" && item.type === "Beverage") return true;
    return false;
  });

  if (!restaurant) {
    return <p>Restaurant data not available.</p>;
  }

  return (
    <section className="menu my-8">
      <div className="menu-head">
        <h2 className="title">{restaurant.name} - Menu</h2>
        <a href="/restaurant" className="back">Back to Restaurants</a>
      </div>
      
      {/* Filter Options */}
      <div className="filter-options">
        <button onClick={() => setFilter("All")} className={`filter-btn ${filter === "All" ? "active" : ""}`}>
          All
        </button>
        <button onClick={() => setFilter("Burgers")} className={`filter-btn ${filter === "Burgers" ? "active" : ""}`}>
          Burgers
        </button>
        <button onClick={() => setFilter("Sandwiches")} className={`filter-btn ${filter === "Sandwiches" ? "active" : ""}`}>
          Sandwiches
        </button>
        <button onClick={() => setFilter("Beverages")} className={`filter-btn ${filter === "Beverages" ? "active" : ""}`}>
          Beverages
        </button>
      </div>

      {/* Display filtered menu items */}
      {filteredItems.length === 0 ? (
        <p>No menu items available for {filter}.</p>
      ) : (
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="menu-card">
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
    </section>
  );
};

export default Menu;
