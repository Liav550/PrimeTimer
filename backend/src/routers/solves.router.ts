import { Router } from "express";
import {
  createSolveHandler,
  getSolvesHandler,
} from "../controllers/solves.controller.js";

const router = Router();

router.get("/:sessionId", getSolvesHandler);
router.post("/", createSolveHandler);
export default router;
