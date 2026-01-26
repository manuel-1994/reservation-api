import type { Response } from 'express';

function tokenToCookie(res: Response, token: string): string {
  const date = new Date(new Date().setDate(new Date().getDate() + 7));
  res.cookie('token', token, {
    httpOnly: true,
    secure: false,
    expires: date,
  });
  return token;
}
export default tokenToCookie;
