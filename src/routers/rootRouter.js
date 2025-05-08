import express from "express";
import drawRouter from "./drawRouter";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.render("home", { pageTitle: "Home" });
});

rootRouter.use("/draw", drawRouter);

export default rootRouter;
