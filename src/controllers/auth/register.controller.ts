import type { Request, Response } from 'express';
import { ENV } from '../../config/env.config';
import httpResponse from '../../utils/httpResponse';
import UserModel from '../../models/user.model';
import bcrypt from 'bcrypt';
import generateToken from '../../utils/generateToken';
import tokenToCookie from '../../utils/tokenToCookie';

async function register(req: Request, res: Response) {
  try {
    const { username, password, email } = req.body;
    if (!email || !password)
      httpResponse.BadRequest(res, 'Email and password are required');

    const existingUser = await UserModel.findOne({ email }).lean();
    if (existingUser) return httpResponse.Conflict(res, 'User already exists');

    const hashedPassword = await bcrypt.hash(password, ENV.BCRYPT_SALT_ROUNDS);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken({
      id: user._id,
      username: user.username,
      email: user.email,
    });
    tokenToCookie(res, token);
    return httpResponse.Created(res, {
      message: 'User registered successfully',
      token,
    });
  } catch (error) {}
}
export default register;
