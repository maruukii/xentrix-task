const app = require("./configuration/config.js");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on Port ", PORT);
});
