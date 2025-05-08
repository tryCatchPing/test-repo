import express from "express";
import { getJsDraw } from "../controllers/jsDrawController";

const jsDrawRouter = express.Router();

jsDrawRouter.get("/", getJsDraw);

export default jsDrawRouter;
