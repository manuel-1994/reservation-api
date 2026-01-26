import type { Request, Response } from 'express';
import UserModel from '../../models/user.model';
import httpResponse from '../../utils/httpResponse';

async function getUsers(req: Request, res: Response) {
  try {
    const user = await UserModel.find().lean();
    return httpResponse.Ok(res, user);
  } catch (error: any) {
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default getUsers;
