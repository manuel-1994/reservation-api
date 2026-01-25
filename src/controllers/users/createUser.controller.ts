import type { Request, Response } from "express";
import UserModel from "../../models/user.model";
import httpResponse from "../../utils/httpResponse";

async function createUser(req: Request, res: Response) {
  try {
    const newUser = await UserModel.create(req.body);
    return httpResponse.Created(res, newUser);
  } catch (error: any) {
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default createUser;