import AppError from "../utils/appError.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

function sendErrorProd(err, res) {
  // In production, send a generic error message without detailed information
  if (err.isOperational) {
    // If the error is operational, send the message and status code
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // For programming or unknown errors, log the error and send a generic message
    console.error("ERROR 💥", err); // Log the error for debugging
    res.status(500).json({
      status: "error",
      message: "Something went wrong! Please try again later.", // Generic message for users
    });
  }
}

function sendErrorDev(err, res) {
  // In development, send detailed error information
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack, // Include stack trace for debugging
    error: err, // Include the error object for more details
  });
}

export default function (err, req, res, next) {
  err.statusCode = err.statusCode || 500; // Default to 500 if statusCode is not set
  err.status = err.status || "error"; // Default to 'error' if status is not set

  if (process.env.NODE_ENV === "development") {
    // In development, send detailed error information
    sendErrorDev(err, res);
  }
  else if (process.env.NODE_ENV === "production") {
    let error = Object.create(err); // Create a new error object to avoid mutating the original error
    error.message = err.message; // Set the message to the original error message

    sendErrorProd(error, res); // Call the production error handler
  }
}