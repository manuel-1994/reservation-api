import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import httpResponse from '../../utils/httpResponse';
import UserModel from '../../models/user.model';
import generateToken from '../../utils/generateToken';
import tokenToCookie from '../../utils/tokenToCookie';

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password)
    return httpResponse.BadRequest(res, 'Email and password are required');

  const user = await UserModel.findOne({ email }).lean();

  if (!user) return httpResponse.NotFound(res, 'User not found');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return httpResponse.Unauthorized(res, 'Invalid credentials');

  const token = generateToken({
    id: user._id,
    username: user.username,
    email: user.email,
  });

  tokenToCookie(res, token);

  return httpResponse.Ok(res, {
    message: 'Login successful',
    token,
  });
}
export default login;
