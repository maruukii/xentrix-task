import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { authenticateToken } from "../utils/auth.util.js";

const router = express.Router();

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);
router.post("/logout", authController.logout);
router.get("/me", authenticateToken, authController.me);
router.get("/refresh", authController.refreshToken);

export default router;
