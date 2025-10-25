export default class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;

  constructor(arg1: string | number, arg2: string | number) {
    let message: string, statusCode: number;

    if (typeof arg1 === "string" && typeof arg2 === "number") {
      message = arg1 as string;
      statusCode = arg2 as number;
    } else if (typeof arg1 === "number" && typeof arg2 === "string") {
      message = arg2 as string;
      statusCode = arg1 as number;
    } else {
      throw new Error("Invalid AppError arguments");
    }

    super(message as string);
    this.statusCode = statusCode as number;
    this.status = `${statusCode as number}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true as boolean;
    Error.captureStackTrace(this, this.constructor);
  }
}
