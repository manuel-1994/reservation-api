import type { Request, Response } from 'express';
import httpResponse from '@/utils/httpResponse';

function logout(req: Request, res: Response) {
  res.cookie('token', '', {
    httpOnly: true,
    secure: false,
    expires: new Date(),
  });
  return httpResponse.Ok(res, { message: 'Logged out successfully' });
}
export default logout;
