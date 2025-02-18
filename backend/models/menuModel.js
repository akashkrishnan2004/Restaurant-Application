// 

// import mongoose from "mongoose";
// import MenuItem from "./menuItemModel.js";

// const menuSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true, trim: true },
//     description: { type: String, trim: true },
//     items: [{ type: mongoose.Schema.Types.ObjectId, ref: MenuItem }],
//   },
//   { timestamps: true }
// );

// const Menu = mongoose.model("Menu", menuSchema);
// export default Menu;

import mongoose from "mongoose";
import MenuItem from "./menuItemModel.js"; // Import MenuItem model

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }], // Reference MenuItem
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
