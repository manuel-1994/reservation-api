import type { Request, Response } from 'express';
import UserModel from '@/models/user.model';
import httpResponse from '@/utils/httpResponse';

const errorMessage = 'User not found';

async function updateUser(req: Request, res: Response) {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).lean();
    if (user) return httpResponse.Ok(res, user);
    return httpResponse.NotFound(res, errorMessage);
  } catch (error: any) {
    if (error.name === 'CastError')
      return httpResponse.NotFound(res, errorMessage);
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default updateUser;
