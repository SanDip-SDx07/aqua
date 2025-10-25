import { Request, Response, NextFunction } from "express";

interface AppError extends Error {
  statusCode?: number;
  status?: string;
}

const globalRouteHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

export default globalRouteHandler;

