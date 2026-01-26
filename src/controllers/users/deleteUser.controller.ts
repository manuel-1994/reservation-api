import type { Request, Response } from 'express';
import UserModel from '../../models/user.model';
import httpResponse from '../../utils/httpResponse';

const errorMessage = 'User not found';

async function deleteUser(req: Request, res: Response) {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id).lean();
    if (user) return httpResponse.NoContent(res);
    return httpResponse.NotFound(res, errorMessage);
  } catch (error: any) {
    if (error.name === 'CastError')
      return httpResponse.NotFound(res, errorMessage);
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default deleteUser;
