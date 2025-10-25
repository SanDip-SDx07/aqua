import { Request, Response, NextFunction, RequestHandler } from 'express';
type AsyncHandler<T = any> = (req: Request, res: Response, next: NextFunction) => Promise<T>;
declare const catchAsync: <T>(fn: AsyncHandler<T>) => RequestHandler;
export default catchAsync;
