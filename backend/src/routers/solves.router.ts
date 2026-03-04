import { Router } from "express";
import { getSolvesHandler } from "../controllers/solves.controller.js";

const router = Router();

router.get("/:sessionId", getSolvesHandler);

export default router;
