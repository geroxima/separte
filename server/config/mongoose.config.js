const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL_ONLINE)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error", err));
