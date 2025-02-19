import mongoose from "mongoose";
import MenuItem from "./menuItemModel.js";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
