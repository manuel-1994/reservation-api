import type { IUserRequest } from '@/interfaces/users/IUserRequest';
import type { Request, Response } from 'express';

async function getProfile(req: IUserRequest, res: Response) {
  return res.json({ message: 'Welcome', userId: req.user?._id });
}

export default getProfile;
