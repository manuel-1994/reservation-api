import { ENV } from '../config/env.config';
import jwt from 'jsonwebtoken';

function generateToken(payload: Object) {
  return jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRES_IN as any,
  });
}
export default generateToken;
