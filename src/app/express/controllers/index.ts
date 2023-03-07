import {
  addOrder,
  deleteOrder,
  listOrders,
  orderById,
  updateOrder,
} from "../../../core/services/orders";
import { NextFunction, Response, Request } from "express";

export async function addNewOrder(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const body = { ...req.body, productIds: JSON.stringify(req.body.productIds) };
  const data = await addOrder(body);
  res.json(data);
}

export async function getOrdersList(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await listOrders();
  res.json(data);
}

export async function getOrderById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const order = await orderById(req.params.id);
  res.json(order);
}

export async function deleteOrderById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const order = await deleteOrder(req.params.id);
  res.json(order);
}

export async function updateOrderById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const body = { ...req.body, productIds: JSON.stringify(req.body.productIds) };
  const order = await updateOrder(req.params.id, body);
  res.json(order);
}
