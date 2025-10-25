import { Request, Response, NextFunction, RequestHandler } from 'express';

type AsyncHandler<T = any> = (req: Request, res: Response, next: NextFunction) => Promise<T>;

const catchAsync = <T>(fn: AsyncHandler<T>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
