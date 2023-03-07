import { Router } from "express";
import orders from "./orders";

const router = Router();

const baseURL = "/";
router.use(baseURL, orders);

export { router };