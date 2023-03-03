import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("orders", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.json("product_ids");
    table.uuid("user_id").notNullable();
    table.float("total_cost").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("orders");
}
