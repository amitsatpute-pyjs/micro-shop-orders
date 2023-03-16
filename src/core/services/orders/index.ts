import knex from "../../../database/client";
import { AddOrder, Orders, UpdateOrders } from "../../../boundary/orders";
import { generateOrderDetails } from "./dataFormatter";

export async function listOrders(): Promise<any> {
  const orders = await knex("orders").select("*").from("orders");
  return {
    message: "Successful",
    data: orders,
  };
}

export async function orderById(id: string): Promise<any> {
  const order = await knex("orders")
    .select("*")
    .from("orders")
    .where("id", "=", id);

  return {
    message: order.length > 0 ? "Order found" : "Order not found",
    data: order[0],
  };
}

export async function addOrder(orderObj: AddOrder): Promise<any> {
  try {
    const data = await knex("orders").insert(orderObj).returning("*");
    return {
      message: "order generated",
      data: data,
    };
  } catch (e: any) {
    console.log(e);
    return {
      error: e.message,
      data: null,
    };
  }
}

export async function updateOrder(
  orderId: string,
  orderObj: UpdateOrders
): Promise<any> {
  try {
    const data = await knex("orders")
      .where("id", "=", orderId)
      .update(orderObj)
      .returning("*");

    return {
      message: "Record updated",
      data: data,
    };
  } catch (e: any) {
    console.log(e);
    return {
      error: e.message,
      data: null,
    };
  }
}

export async function deleteOrder(orderId: string): Promise<any> {
  try {
    const data = await knex("orders").where("id", "=", orderId).del();
    return {
      message: data > 0 ? "Order deleted" : "Order not found",
      data: { orderId: data > 0 ? orderId : null },
    };
  } catch (e: any) {
    console.log(e);
    return {
      error: e.message,
      data: null,
    };
  }
}

export async function getOrderDetails(orderId: string): Promise<Orders> {
  const order = await knex("orders")
    .join("users", "orders.userId", "=", "users.id")
    .select("orders.*", "users.email")
    .where("orders.id", "=", orderId);
  const data = generateOrderDetails(order[0]);
  return data;
}
