import express from "express";
import * as propertyController from "../controllers/property.controller.js";
import { authenticateToken } from "../utils/auth.util.js";

const router = express.Router();

router.post("/new", authenticateToken, propertyController.create);
router.get("/all", authenticateToken, propertyController.getAll);
router.get("/:id", authenticateToken, propertyController.getPropertyById);

export default router;
