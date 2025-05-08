import express from "express";
import {
  getFabricCanvas,
  saveCanvas,
  loadCanvas,
} from "../controllers/fabricController";

const fabricRouter = express.Router();

fabricRouter.get("/", getFabricCanvas);

fabricRouter.post("/save", saveCanvas);
fabricRouter.get("/load", loadCanvas);

export default fabricRouter;
