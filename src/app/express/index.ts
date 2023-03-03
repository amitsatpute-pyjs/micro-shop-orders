import express from "express";
import dotenv from "dotenv";
import { router } from "./routes";


dotenv.config()
const port = process.env.PORT||8081

const app = express();
app.use(express.json());
app.use(router);

app.listen(port, () =>
  console.log(`Orders microservice listening on port ${port}!`)
);