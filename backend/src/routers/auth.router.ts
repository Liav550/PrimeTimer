import { Router } from "express";
import { loginHandler, signUpHandler } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", loginHandler);
router.post("/register", signUpHandler);

export default router;
