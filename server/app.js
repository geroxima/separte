const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // Import morgan for logging
const session = require("express-session");
const passport = require("passport");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const cookieParser = require("cookie-parser");

app.use(cors());

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// Passport configuration
require("./utils/passport.auth")(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handler
//Import middlewares
const errorMiddleware = require("./middlewares/errors");
const ErrorHandler = require("./utils/errorHandler");
// Logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

require("./config/mongoose.config");

//Aca van las rutas
app.get("/ping", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res, next) => {
  next(new ErrorHandler(404, `${req.originalUrl} route not found`));
});
//use error handle
app.use(errorMiddleware);

app.listen(port, () => console.log(`Listening on port ${port}`));

// Handling unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  app.close(() => {
    process.exit(1);
  });
});
