import { useState } from "react";
import "./css/menu.css";
import Items from "./items"

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Food");


  return (
    <div className="menuBody" id="menu">
      <div className="menuBodyTopSection">
        <h1 className="menuBodyHead1">Menu</h1>
        <p className="menuBodyPara">
          Please take a look at our menu featuring food, drinks, and brunch. If <br />
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>

      <div className="menuBodyBtnSection">
        <button className="foodBtn" onClick={() => setSelectedCategory("Food")}>FOOD</button>
        <button className="drinksBtn" onClick={() => setSelectedCategory("Drinks")}>DRINKS</button>
        <button className="brunchBtn" onClick={() => setSelectedCategory("Brunch")}>BRUNCH</button>
      </div>
      <Items selectedCategory={selectedCategory} />
    </div>
  );
}
