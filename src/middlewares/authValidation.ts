import type { Response, NextFunction } from 'express';
import type { IUserRequest } from '@/interfaces/users/IUserRequest';
import type { IUserJWTPayload } from '@/interfaces/users/IUserJWTPayload';
import { ENV } from '@/config/env.config';
import httpResponse from '@/utils/httpResponse';
import jwt from 'jsonwebtoken';

function verifyAuthToken(req: IUserRequest, res: Response, next: NextFunction) {
  const { token } = req.cookies;

  if (!token) return httpResponse.Unauthorized(res, 'Token not found');

  try {
    const payload = jwt.verify(token, ENV.JWT_SECRET) as IUserJWTPayload;
    req.user = payload;

    return next();
  } catch (error) {
    return httpResponse.Unauthorized(res, 'Invalid token');
  }
}
export default verifyAuthToken;
