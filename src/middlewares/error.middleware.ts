import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/errorHandler';

function errorMiddleware(
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  console.log(error);
  return res.status(500).json({ message: error.message });
}

export default errorMiddleware;