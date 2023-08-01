import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import router from "./router/router.js";
import { createTable } from "./database/sql.js";
import swaggerMiddleware from "./swagger/swagger.js";

const app = express();

async function init() {
  try {
    
    await createTable();
    serverStart();
  } catch (error) {
    console.log("database is not created");
    console.log(error);
  }

  function serverStart() {
    app.use(bodyParser.json());
    app.use(cors());

    app.use("/api",cors(), router);
    app.use("/", ...swaggerMiddleware());
    app.listen(3003);
  }
}

init();
