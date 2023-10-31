import { Application, Request, Response } from "express";
import { statusCode } from "./utils/statusCode";
import students from "./router/studentRouter";

export const mainApp = (app: Application) => {
  app.use("/api/v2", students);

  app.get("/", (req: Request, res: Response) => {
    try {
      res.status(statusCode.OK).json({
        message: "Welcome to the student's API",
      });
    } catch (err) {
      res.status(statusCode.BAD_REQUEST).json({
        message: "Error",
        error: err,
      });
    }
  });
};
