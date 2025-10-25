import { Request, Response, NextFunction } from "express";
interface AppError extends Error {
    statusCode?: number;
    status?: string;
}
declare const globalRouteHandler: (err: AppError, req: Request, res: Response, next: NextFunction) => void;
export default globalRouteHandler;
