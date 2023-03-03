import type { Knex } from "knex";

// Update with your config settings.
const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;


const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql",
    connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT? parseInt(DATABASE_PORT):3306,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
    }
  }

};

export default config;
