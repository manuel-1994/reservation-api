import type { NextFunction, Request, Response } from 'express';

const errorHanddle = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status ?? 500;
  const message = err.message ?? 'Internal server error';

  if (process.env.NODE_ENV !== 'production') {
    console.log(`[ERROR] ${err}`);
  }
  res.status(status).json({ error: message });
};

export default errorHanddle;
