import app from "./configuration/app.config.js";
const PORT = process.env.PORT || 3000;
const API_PREFIX = process.env.API_PREFIX || "/api/v1";

//Routes
import authRoute from "./routes/auth.route.js";
import propertyRoute from "./routes/property.route.js";
import uploadRoute from "./routes/upload.route.js";

app.use(`${API_PREFIX}/properties`, propertyRoute);
app.use(`${API_PREFIX}/auth`, authRoute);
app.use(`${API_PREFIX}`, uploadRoute);

app.listen(PORT, () => {
  console.log("Server running on Port ", PORT);
});
