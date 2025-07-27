class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // Determines if the status is a client error (4xx) or server error (5xx)
    this.isOperational = true; // Indicates that this error is operational and can be handled gracefully

    Error.captureStackTrace(this, this.constructor); // Captures the stack trace for debugging
  }
}

export default AppError; // Exports the AppError class for use in other modules