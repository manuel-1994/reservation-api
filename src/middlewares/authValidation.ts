import type { Request, Response, NextFunction } from 'express';
import httpResponse from '../utils/httpResponse';
import jwt from 'jsonwebtoken';

function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
  const { token } = req.cookies;

  if (!token) return httpResponse.Unauthorized(res, 'Token not found');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    (req as any).user = decoded;

    return next();
  } catch (error) {
    return httpResponse.Unauthorized(res, 'Invalid token');
  }
}
export default verifyAuthToken;
