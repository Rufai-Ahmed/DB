import express, { Application } from "express";
import "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();

const port: number = 4000;

app.use(express.json());

mainApp(app);

const server = app.listen(port, () => {
  console.log("RUN!");
});

process.on("uncaughtException", (error: Error) => {
  console.log(error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log(reason);

  server.close(() => {
    process.exit(1);
  });
});
