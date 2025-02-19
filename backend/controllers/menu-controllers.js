import Menu from "../models/menuModel.js";
import MenuItem from "../models/menuItemModel.js";

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find()
    console.log(" Menus Fetched:", menus);

    res.status(200).json(menus);
  } catch (error) {
    console.error("❌ Error fetching menus:", error);
    res.status(500).json({ message: "Error fetching menus", error });
  }
};


export const getMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find().populate("items"); // Fetch full item details
    res.status(200).json(menus);
  } catch (error) {
    console.error("Error fetching menus:", error);
    res.status(500).json({ message: "Error fetching menus", error });
  }
};

export const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id).populate("items");
    if (!menu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu", error });
  }
};

export const createMenu = async (req, res) => {
  try {
    const { name, description, items } = req.body;
    const newMenu = new Menu({ name, description, items });
    const savedMenu = await newMenu.save();
    res.status(201).json(savedMenu);
  } catch (error) {
    res.status(500).json({ message: "Error creating menu", error });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const { name, description, items } = req.body;
    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      { name, description, items },
      { new: true }
    ).populate("items");

    if (!updatedMenu)
      return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: "Error updating menu", error });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting menu", error });
  }
};

export const addItemToMenu = async (req, res) => {
  try {
    const { itemId } = req.body;
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });

    const menuItem = await MenuItem.findById(itemId);
    if (!menuItem) return res.status(404).json({ message: "Item not found" });

    menu.items.push(menuItem._id);
    await menu.save();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Error adding item to menu", error });
  }
};
