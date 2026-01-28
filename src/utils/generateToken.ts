import { ENV } from '@/config/env.config';
import jwt from 'jsonwebtoken';
import type { IUserJWTPayload } from '@/interfaces/users/IUserJWTPayload';

function generateToken(payload: IUserJWTPayload) {
  return jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRES_IN as any,
  });
}
export default generateToken;
