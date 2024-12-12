import React, { useState } from "react";
import "./Restaurants.css";
import Menu from "./Menu";
import { menus } from "./menuData";
import taco from "../img/tacobell.png"
import br from "../img/baskin robbins.png"
import kfc from "../img/kfc.png"
import dominos from "../img/dominos.png"
import pizza from "../img/pizza hut.png"
import mcd from "../img/mac donalds.png"
import Star from "../img/starbucks.png"
import burger from "../img/burger king.png"

const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  
  const restaurants = [
    { name: "Burger King", rating: "0.8", reviews: "873", type: "Burger", price: "340/-", status: "Open", img: burger },
    { name: "Pizza Hut", rating: "0.5", reviews: "34", type: "Pizza", price: "150/-", status: "Open", img: pizza },
    { name: "KFC", rating: "0.8", reviews: "873", type: "Burger", price: "340/-", status: "Closed", img: kfc },
    { name: "Mac Donalds", rating: "0.5", reviews: "223", type: "Fries", price: "220/-", status: "Open", img: mcd },
    { name: "Dominos", rating: "0.8", reviews: "873", type: "Pizza", price: "340/-", status: "Closed", img: dominos },
    { name: "Starbucks", rating: "0.8", reviews: "200", type: "Coffee", price: "400/-", status: "Open", img: Star },
    { name: "Baskin Robbins", rating: "0.8", reviews: "200", type: "Ice cream", price: "400/-", status: "Open", img: br },
    { name: "Taco Bell", rating: "0.8", reviews: "200", type: "Ice cream", price: "400/-", status: "Open", img: taco },
  ];

  const handleRestaurantClick = (restaurant) => {
    if (restaurant.status === "Closed") {
      return; // Prevent interaction if restaurant is closed
    }
    setSelectedRestaurant(restaurant);
  };

  const handleTagClick = (restaurant) => {
    restaurant.status = restaurant.status === "Open" ? "Closed" : "Open"; // Toggle the status
  };

  return selectedRestaurant ? (
    selectedRestaurant.status === "Closed" ? (
      <div className="closed-message">
        <h3>The restaurant is currently closed</h3>
      </div>
    ) : (
      <Menu restaurant={selectedRestaurant} menuItems={menus[selectedRestaurant.name]} />
    )
  ) : (
    <section className="restaurants my-8">
      <div className="Reshead">
        <h2 className="title">Restaurants</h2>
        <a href="#" className="see-all">See all</a>
      </div>
      <div className="restaurants-grid">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className={`restaurant-card ${restaurant.status === "Closed" ? "closed" : ""}`}
            onClick={() => handleRestaurantClick(restaurant)}
          >
            <img src={restaurant.img} alt={`${restaurant.name} logo`} className="restaurant-img" />
            <div className="restaurant-info">
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <div className="details">
                <span><i className="fas fa-star"></i> {restaurant.rating} ({restaurant.reviews})</span>
                <span><i className="fas fa-utensils"></i> {restaurant.type}</span>
                <span>₹ {restaurant.price}</span>
              </div>
              <div className="tags">
                <span
                  className={`status-tag ${restaurant.status === "Open" ? "open" : "closed"}`}
                  onClick={() => handleTagClick(restaurant)} // Toggle the status when clicked
                >
                  {restaurant.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
