import express from "express";
import { authenticateToken } from "../utils/auth.util.js";
import { uploadImage } from "../controllers/upload.controller.js";
import upload from "../configuration/upload.config.js";

const router = express.Router();

router.post(
  "/upload-image",
  authenticateToken,
  upload.single("image"),
  uploadImage
);

export default router;
