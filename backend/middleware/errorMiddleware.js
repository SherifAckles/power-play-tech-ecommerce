// This middleware function handles requests for routes that are not found.
const notFound = (req, res, next) => {
  const error = new Error(`NOT FOUND-${req.originalUrl}`); // Create a new error object with a descriptive message that includes the original URL requested.
  res.status(404); // Set the response status code to 404 (Not Found).
  next(error); // Pass the error object to the next middleware function.
};

// This middleware function handles errors that occur during request processing.
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Get the response status code, default to 500 if not available.
  let message = err.message; // Get the error message from the error object.

  // Check if the error is a CastError with kind 'objectId', indicating a resource not found.
  if (err.name === "CastError" && err.kind === "objectId") {
    message = "Resource not found";
    statusCode = 404; // Set the status code to 404 (Not Found) for resource not found errors.
  }

  // Send the response with the appropriate status code and error message.
  res.status(statusCode).json({
    message, // Send the error message in the response.
    stack: process.env.NODE_ENV === "production" ? "🥳" : err.stack, // If in production mode, hide the stack trace; otherwise, send the error stack trace in the response.
  });
};

// Export both middleware functions to make them accessible to other parts of the application.
export { notFound, errorHandler };
