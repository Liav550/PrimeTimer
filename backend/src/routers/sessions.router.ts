import { Router } from "express";
import protectedRoute from "../middlewares/cookieValidator.middleware.js";
import { getUserSessionsHandler } from "../controllers/sessions.controller.js";
const router = Router();

router.use(protectedRoute);
router.get("/", getUserSessionsHandler);

export default router;
