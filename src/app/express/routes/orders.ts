import { Router } from "express";
import {
  addNewOrder,
  getOrderById,
  getOrdersList,
  deleteOrderById,
  updateOrderById,
} from "../controllers";

const router = Router();

router.get("/orders", getOrdersList);
router.post("/addorder", addNewOrder);
router.get("/order/:id", getOrderById);
router.delete("/deleteorder/:id", deleteOrderById);
router.put("/updateorder/:id", updateOrderById);
// router.put("/detailorder/:id", getDetailOrder);

export default router;
