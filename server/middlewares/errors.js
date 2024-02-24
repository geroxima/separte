const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV.trim() === "production") {
    let error = { ...err };
    error.message = err.message;

    // Wrong Mongoose Object ID Error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorHandler(404, message);
    }
    // Mongoose Validation Error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(400, message);
    }

    // Handling Mongoose duplicate key errors
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      error = new ErrorHandler(400, message);
    }
    // Handling wrong JWT error
    if (err.name === "JsonWebTokenError") {
      const message = "JSON Web Token is invalid. Try Again!!!";
      error = new ErrorHandler(400, message);
    }
    // Handling Expired JWT error
    if (err.name === "TokenExpiredError") {
      const message = "JSON Web Token is expired. Try Again!!!";
      error = new ErrorHandler(400, message);
    }

    if (err.code === "ERR_HTTP_INVALID_STATUS_CODE") {
      const message = "Invalid status code: 0";
      error = new ErrorHandler(400, message);
    }
    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
