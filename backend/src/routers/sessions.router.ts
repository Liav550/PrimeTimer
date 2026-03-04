import { Router } from "express";
import protectedRoute from "../middlewares/cookieValidator.middleware.js";
import {
  deleteSessionHandler,
  getUserSessionsHandler,
} from "../controllers/sessions.controller.js";
const router = Router();

router.use(protectedRoute);
router.get("/", getUserSessionsHandler);
router.delete("/delete/:id", deleteSessionHandler);

export default router;
