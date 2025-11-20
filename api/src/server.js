import app from "./configuration/app.config.js";
const PORT = process.env.PORT || 3000;

//Routes
import authRoute from "./routes/auth.route.js";

app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server running on Port ", PORT);
});
