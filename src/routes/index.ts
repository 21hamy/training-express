import express from "express";
import {HelloController} from "../controllers/helloController";

const router = express.Router();

router.get("/hello", async (_req, res) => {
  const controller = new HelloController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;