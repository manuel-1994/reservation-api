import { model } from 'mongoose';
import userSchema from '../schemas/user.schema';

type UserDoc = {
  _id: 'string';
  username: 'String';
  password: 'String';
  email: 'String';
  createdAt: 'Date';
  updatedAt: 'Date';
};

const UserModel = model<UserDoc>('Users', userSchema);

export default UserModel;
