import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header className="header flex justify-between items-center py-4">
      <div className="flex items-center space-x-4">
      <span className="text-gray-600">
  <i className="fas fa-hamburger"></i> DZYRIS
</span>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search for..." className="search-input" />
        <button className="btn">
          <i className="fas fa-search"></i>
        </button>
        <button className="btn">
          <i className="fas fa-filter"></i>
        </button>
        <button className="btn">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
