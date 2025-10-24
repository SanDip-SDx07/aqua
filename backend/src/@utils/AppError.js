class AppError extends Error {
  constructor(arg1, arg2) {
    let message, statusCode;

    if (typeof arg1 === "string" && typeof arg2 === "number") {
      message = arg1;
      statusCode = arg2;
    } else if (typeof arg1 === "number" && typeof arg2 === "string") {
      message = arg2;
      statusCode = arg1;
    } else {
      throw new Error("Invalid AppError arguments");
    }

    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
