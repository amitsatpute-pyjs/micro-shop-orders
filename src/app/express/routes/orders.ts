import { Router } from "express";
import { getOrdersList } from "../controllers";
const router = Router();
router.get("/orders", getOrdersList);
export default router;