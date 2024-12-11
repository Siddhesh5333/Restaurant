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




export const menus = {
    "Burger King": [
        { name: "Whopper",type : "Burger", description: "Juicy grilled burger with fresh veggies", price: "199", img: whoper },
        { name: "Chicken Fries", description: "Crispy fried chicken strips", price: "149", img: fries },
        { name: "Classic Chicken Sandwich",type : "Sandwich", description: "Crispy chicken fillet with lettuce and mayo", price: "179", img: sandwich },
        { name: "Cheese Burger",type : "Burger", description: "Beef patty with melted cheese, pickles, and mustard", price: "159", img: cheese },
        { name: "Veggie Burger",type : "Burger", description: "Vegetarian patty with fresh lettuce and tomato", price: "149", img: veg },
        { name: "Crispy Chicken Deluxe",type : "Burger", description: "Chicken patty with creamy dressing and tomato", price: "199", img: crispy },
        { name: "Double Whopper",type : "Burger", description: "Two beef patties stacked with fresh toppings", price: "249", img: double },
        { name: "Coke Float",type : "Beverage", description: "Chilled Coke topped with vanilla soft serve", price: "89", img: coke },
        { name: "King Egg Burger",type : "Burger", description: "Egg patty with lettuce, tomato, and mayo", price: "129", img: egg },
        { name: "Spicy Chicken Royale",type : "Burger", description: "Spicy chicken patty with crisp lettuce", price: "209", img: spicy },
    ],
    "Pizza Hut": [
      { name: "Margherita", description: "Classic cheese pizza", price: "249", img: "path/to/margherita.png" },
      { name: "Veggie Supreme", description: "Loaded with vegetables", price: "299", img: "path/to/veggie_supreme.png" },
    ],
    // Add menu items for other restaurants
  };
  