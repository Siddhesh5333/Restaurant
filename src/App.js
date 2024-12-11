import React from "react";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Restaurants from "./Components/Restaurants";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="container mx-auto p-4">
        
        <Restaurants />
        <Categories />
      </main>
    </div>
  );
};

export default App;
