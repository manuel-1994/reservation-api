import type { Request, Response } from 'express';

async function getProfile(req: Request, res: Response) {
  return res.json({ message: 'Welcome', userId: (req as any).user.id });
}

export default getProfile;
