import knex from "./client";
import mockOrders from "./mockOrders";

async function insertData() {
  await knex("orders").insert(mockOrders);
  console.log("oreders added");
  knex.destroy();
}

insertData();
