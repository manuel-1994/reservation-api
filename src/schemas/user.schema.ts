import { Schema } from 'mongoose';
import type { IUser } from '@/interfaces/users/IUser';

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true, min: 0, max: 100 },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
