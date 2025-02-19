
import mongoose from "mongoose";
import Menu from "./models/menuModel.js";
import MenuItem from "./models/menuItemModel.js";

mongoose.connect("mongodb://localhost:27017/Restaurant-App");

const seedDatabase = async () => {
  await Menu.deleteMany({});
  await MenuItem.deleteMany({});

  // Food Items
  const foodItems = await MenuItem.insertMany([
    { name: "Burger", description: "Juicy grilled beef burger", price: 10 },
    { name: "Pizza", description: "Cheesy margherita pizza", price: 12 },
  ]);

  // Drink Items
  const drinkItems = await MenuItem.insertMany([
    { name: "Coke", description: "Refreshing soda", price: 3 },
    { name: "Orange Juice", description: "Fresh orange juice", price: 5 },
  ]);

  // Brunch Items
  const brunchItems = await MenuItem.insertMany([
    { name: "Pancakes", description: "Fluffy pancakes with syrup", price: 8 },
    { name: "Omelette", description: "Egg omelette with veggies", price: 7 },
  ]);

  await Menu.insertMany([
    { name: "Food", description: "Delicious food items", items: foodItems },
    { name: "Drinks", description: "Refreshing beverages", items: drinkItems },
    { name: "Brunch", description: "Perfect brunch meals", items: brunchItems },
  ]);

  console.log("Database Seeded Successfully!");
  mongoose.disconnect();
};

seedDatabase();
