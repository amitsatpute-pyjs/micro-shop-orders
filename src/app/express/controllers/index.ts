import { listOrders } from "../../../core/services/orders";
import { NextFunction, Response, Request } from "express";

export async function addNewOrder(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {}

export async function getOrdersList(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await listOrders();
  console.log(data);
  res.json(data);
}
