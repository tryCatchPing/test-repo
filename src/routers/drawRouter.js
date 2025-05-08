import express from "express";
import { getDraw } from "../controllers/drawController";
import fabricRouter from "./fabricRouter";
import jsDrawRouter from "./jsDrawRouter";

const drawRouter = express.Router();

drawRouter.get("/", getDraw);

drawRouter.use("/fabric", fabricRouter);
drawRouter.use("/js-draw", jsDrawRouter);

export default drawRouter;
