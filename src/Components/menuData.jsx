import whoper from "../img/whooper.png";
import fries from "../img/chicken fries.png";
import sandwich from "../img/sandwich.png";
import cheese from "../img/cheese burger.png";
import veg from "../img/veg burger.png";
import double from "../img/double whooper.png";
import spicy from "../img/spicy chicken.png";
import crispy from "../img/crispy chicken.png";
import egg from "../img/egg burger.png";
import coke from "../img/coke float.png";
import mar from "../img/margherita.png";
import sup from "../img/veg supreme.png";
import pep from "../img/pepproni.png";
import tikka from "../img/tikka.png";
import gar from "../img/garlic bread.png";
import lat from "../img/latte.png";
import cap from "../img/cappuccino.png";
import esp from "../img/espresso.png";
import moc from "../img/mocha.png";
import fra from "../img/Frappuccino.png";

export const menus = {
  "Burger King": [
    { id: "burger-whopper", name: "Whopper", type: "Burger", description: "Juicy grilled burger with fresh veggies", price: "199", img: whoper, addOns: [{ name: "Cheese", price: "30" }, { name: "Bacon", price: "40" }, { name: "Extra Patty", price: "50" }, { name: "Mayo", price: "20" }, { name: "Lettuce", price: "15" }] },
    { id: "fries-chicken", name: "Chicken Fries", type: "Fries", description: "Crispy fried chicken strips", price: "149", img: fries, addOns: [{ name: "Cheese Sauce", price: "25" }, { name: "BBQ Sauce", price: "20" }, { name: "Spicy Dip", price: "15" }] },
    { id: "sandwich-classic-chicken", name: "Classic Chicken Sandwich", type: "Sandwich", description: "Crispy chicken fillet with lettuce and mayo", price: "179", img: sandwich, addOns: [{ name: "Extra Chicken", price: "50" }, { name: "Cheese", price: "30" }, { name: "Spicy Sauce", price: "20" }] },
    { id: "burger-cheese", name: "Cheese Burger", type: "Burger", description: "Beef patty with melted cheese, pickles, and mustard", price: "159", img: cheese, addOns: [{ name: "Extra Cheese", price: "30" }, { name: "Pickles", price: "15" }, { name: "Bacon", price: "40" }, { name: "Jalapenos", price: "20" }] },
    { id: "burger-veggie", name: "Veggie Burger", type: "Burger", description: "Vegetarian patty with fresh lettuce and tomato", price: "149", img: veg, addOns: [{ name: "Avocado", price: "40" }, { name: "Cheese", price: "30" }, { name: "Mushrooms", price: "20" }, { name: "Lettuce", price: "15" }] },
    { id: "burger-crispy-chicken", name: "Crispy Chicken Deluxe", type: "Burger", description: "Chicken patty with creamy dressing and tomato", price: "199", img: crispy, addOns: [{ name: "Cheese", price: "30" }, { name: "Bacon", price: "40" }, { name: "Mayo", price: "20" }, { name: "Lettuce", price: "15" }] },
    { id: "burger-double-whopper", name: "Double Whopper", type: "Burger", description: "Two beef patties stacked with fresh toppings", price: "249", img: double, addOns: [{ name: "Extra Cheese", price: "30" }, { name: "Bacon", price: "40" }, { name: "Jalapenos", price: "20" }, { name: "Onions", price: "15" }] },
    { id: "beverage-coke-float", name: "Coke Float", type: "Beverage", description: "Chilled Coke topped with vanilla soft serve", price: "89", img: coke, addOns: [{ name: "Extra Ice Cream", price: "30" }, { name: "Chocolate Syrup", price: "20" }, { name: "Cherries", price: "10" }] },
    { id: "burger-king-egg", name: "King Egg Burger", type: "Burger", description: "Egg patty with lettuce, tomato, and mayo", price: "129", img: egg, addOns: [{ name: "Extra Egg", price: "20" }, { name: "Cheese", price: "30" }, { name: "Bacon", price: "40" }, { name: "Pickles", price: "15" }] },
    { id: "burger-spicy-chicken-royale", name: "Spicy Chicken Royale", type: "Burger", description: "Spicy chicken patty with crisp lettuce", price: "209", img: spicy, addOns: [{ name: "Extra Spicy Sauce", price: "20" }, { name: "Cheese", price: "30" }, { name: "Jalapenos", price: "20" }, { name: "Lettuce", price: "15" }] },
  ],
  "Pizza Hut": [
    { id: "pizza-margherita", name: "Margherita", type: "Pizza", description: "Classic cheese pizza", price: "249", img: mar, addOns: [{ name: "Extra Cheese", price: "40" }, { name: "Olives", price: "30" }, { name: "Mushrooms", price: "25" }, { name: "Basil", price: "15" }] },
    { id: "pizza-veggie-supreme", name: "Veggie Supreme", type: "Pizza", description: "Loaded with fresh vegetables and mozzarella", price: "299", img: sup, addOns: [{ name: "Olives", price: "30" }, { name: "Bell Peppers", price: "25" }, { name: "Mushrooms", price: "25" }, { name: "Cheese", price: "40" }] },
    { id: "pizza-chicken-pepperoni", name: "Chicken Pepperoni", type: "Pizza", description: "Delicious chicken pepperoni with melted cheese", price: "349", img: pep, addOns: [{ name: "Extra Chicken", price: "50" }, { name: "Bacon", price: "40" }, { name: "Olives", price: "30" }, { name: "Cheese", price: "40" }] },
    { id: "pizza-chicken-tikka", name: "Chicken Tikka", type: "Pizza", description: "Chicken tikka with spicy sauce and mozzarella", price: "319", img: tikka, addOns: [{ name: "Extra Tikka Chicken", price: "50" }, { name: "Onions", price: "20" }, { name: "Cheese", price: "40" }, { name: "Coriander", price: "15" }] },
    { id: "sides-garlic-breadsticks", name: "Garlic Breadsticks", type: "Sides", description: "Freshly baked breadsticks with garlic seasoning", price: "129", img: gar, addOns: [{ name: "Cheese", price: "30" }, { name: "Spicy Dip", price: "20" }, { name: "BBQ Sauce", price: "15" }] },
  ],
  "Starbucks": [
    { id: "coffee-caffe-latte", name: "Caffe Latte", type: "Coffee", description: "Espresso with steamed milk and a touch of foam", price: "180", img: lat, addOns: [{ name: "Vanilla Syrup", price: "20" }, { name: "Caramel Syrup", price: "20" }, { name: "Extra Shot", price: "30" }, { name: "Almond Milk", price: "15" }] },
    { id: "coffee-cappuccino", name: "Cappuccino", type: "Coffee", description: "Espresso with steamed milk and frothy foam", price: "170", img: cap, addOns: [{ name: "Chocolate Powder", price: "15" }, { name: "Cinnamon", price: "10" }, { name: "Extra Shot", price: "30" }] },
    { id: "coffee-espresso", name: "Espresso", type: "Coffee", description: "Strong coffee made with a single shot of espresso", price: "120", img: esp, addOns: [{ name: "Vanilla Syrup", price: "20" }, { name: "Caramel Syrup", price: "20" }, { name: "Extra Shot", price: "30" }] },
    { id: "coffee-mocha", name: "Mocha", type: "Coffee", description: "Espresso with steamed milk, chocolate syrup, and whipped cream", price: "200", img: moc, addOns: [{ name: "Extra Chocolate", price: "25" }, { name: "Whipped Cream", price: "15" }, { name: "Caramel Syrup", price: "20" }] },
    { id: "coffee-frappuccino", name: "Frappuccino", type: "Coffee", description: "Blended iced coffee with milk, coffee, and ice", price: "230", img: fra, addOns: [{ name: "Whipped Cream", price: "15" }, { name: "Chocolate Syrup", price: "20" }, { name: "Caramel Syrup", price: "20" }] },
  ],
};