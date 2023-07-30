import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router";
import createTable from "./database/sql";

const app = express();
dotenv.config();


async function init() {
    try {
      await createTable();
      serverStart();
    } catch (error) {
      console.log(error);
    }
  
    function serverStart() {
      app.use(bodyParser.json());
      app.use(cors());
  
      app.use("/api",router)
  
      app.listen(3000);
    }
  }
  
  init();