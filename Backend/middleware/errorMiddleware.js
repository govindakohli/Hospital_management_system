export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Handle specific errors
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new errorhandler(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    err = new errorhandler("Invalid token, try again", 401);
  }

  if (err.name === "TokenExpiredError") {
    err = new errorhandler("Token expired, try again", 401);
  }

  if (err.name === "CastError") {
    err = new errorhandler(`Invalid ${err.path}`, 400);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((err) => err.message)
        .join(" || ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};