import { model } from 'mongoose';
import type { IUser } from '@/interfaces/users/IUser';
import userSchema from '@/schemas/user.schema';

const UserModel = model<IUser>('Users', userSchema);

export default UserModel;
