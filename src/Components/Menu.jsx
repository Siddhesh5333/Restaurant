import React from "react";
import "./Menu.css";

const Menu = ({ restaurant, menuItems = [] }) => {
    if (!restaurant) {
      return <p>Restaurant data not available.</p>;
    }
  
    return (
      <section className="menu my-8">
        <div className="menu-head">
          <h2 className="title">{restaurant.name} - Menu</h2>
          <a href="/restaurant" className="back">Back to Restaurants</a>
        </div>
        {menuItems.length === 0 ? (
          <p>No menu items available.</p>
        ) : (
          <div className="menu-grid">
            {menuItems.map((item, index) => (
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
