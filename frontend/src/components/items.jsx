import "./css/items.css";
import { useState, useEffect } from "react";
import axios from "axios";
import glass1 from "./images/glass1.png"
import glass2 from "./images/glass2.png"

export default function Items({ selectedCategory }) {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getmenus");
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchItems();
  }, []);

  const food =
    menus?.find((menu) => menu?.name?.toLowerCase() === "food")?.items || [];
  const drink =
    menus?.find((menu) => menu?.name?.toLowerCase() === "drinks")?.items || [];
  const brunch =
    menus?.find((menu) => menu?.name?.toLowerCase() === "brunch")?.items || [];

  const categoryItems =
    selectedCategory?.toLowerCase() === "food"
      ? food
      : selectedCategory?.toLowerCase() === "drinks"
      ? drink
      : selectedCategory?.toLowerCase() === "brunch"
      ? brunch
      : [];

  return (
    <div className="itemsBody">
      <div className="itemsBodyContainer">
        <img src={glass1} alt="glass1" className="glass1" />
        <img src={glass2} alt="glass2" className="glass2" />
        <h1 className="itemsBodyHead1">---- {selectedCategory} ----</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="itemsList">
            {categoryItems.length > 0 ? (
              categoryItems.map((item) => (
                <div key={item._id} className="itemCard">
                  <p className="itemName">{item.name}.................${item.price}</p>
                  <p className="itemDescription">{item.description}</p>
                  {/* <p className="itemPrice">${item.price}</p> */}
                </div>
              ))
            ) : (
              <p>No items found for this category.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
