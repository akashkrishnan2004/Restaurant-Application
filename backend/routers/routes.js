import express from "express";
import {
  getMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
  addItemToMenu,
  getMenuItems,
} from "../controllers/menu-controllers.js";

const router = express.Router();

router.get("/getmenu", getMenus);
router.get("/getmenus", getMenuItems);
router.get("/getmenu/:id", getMenuById);
router.post("/addmenu", createMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);
router.post("/:id/items", addItemToMenu);

export default router;
