// import mongoose from "mongoose";

// const menuItemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   price: { type: Number, required: true },
// });

// const MenuItem = mongoose.model("MenuIem", menuItemSchema);

// export default MenuItem;

// import mongoose from "mongoose";

// const menuItemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   price: { type: Number, required: true },
// });

// const MenuItem = mongoose.model("MenuItem", menuItemSchema);
// export default MenuItem;


// import mongoose from "mongoose";

// const menuItemSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true, trim: true },
//     description: { type: String, trim: true },
//     price: { type: Number, required: true, min: 0 }, // Prevents negative prices
//   },
//   { timestamps: true } // Adds createdAt & updatedAt automatically
// );

// const MenuItem = mongoose.model("MenuItem", menuItemSchema);
// export default MenuItem;


import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
