// const mongoose = require("mongoose");
import mongoose from 'mongoose';

interface IUser extends mongoose.Document {
  username: string;
  mobileNumber: string;
  address: string;
  status: 'active' | 'blocked';
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['panding', 'active', 'blocked'],
      default: 'active',
      required: true,
    },
  },
  { timestamps: true, collection: 'users' },
);

export default mongoose.model<IUser>('UserModel', userSchema);
