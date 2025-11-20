import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";

dotenv.config({ path: ".env.local" });

const app = express();

// CORS Configuration
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(
  cookieSession({
    name: "session",
    keys: ["xentrix-task"],
    maxAge: 24 * 6 * 60 * 1000,
  })
);

// Parsers
app.use(cookieParser());
app.use(express.json());

// ---- DATABASE CONNECTION ----
if (process.env.NODE_ENV === "production") {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((error) => console.error("MongoDB connection error:", error));
} else {
  mongoose
    .connect("mongodb://127.0.0.1:27017/xentrix-task")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));
}

export default app;
