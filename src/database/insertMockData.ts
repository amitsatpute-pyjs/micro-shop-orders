import knex from "./client.js";
import mockOrders from "./mockOrders.js";

// const knex = require("./client")

async function insertData() {
  await knex("orders").insert(mockOrders);
  console.log("oreders added");
  knex.destroy();
}

insertData();
