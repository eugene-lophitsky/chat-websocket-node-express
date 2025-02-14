import express from "express";
import aboutController from "../controllers/aboutController.js";

const aboutRouter = express.Router();
aboutRouter.get("/", aboutController);

export default aboutRouter;