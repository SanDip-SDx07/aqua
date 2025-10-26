// const mongoose = require("mongoose");
import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  aquid: string;
  role: 'admin' | 'user' | 'vendor' | 'member' | 'rider';
  username: string;
  mobileNumber: string;
  address: {
    cuntry?: string;
    state?: string;
    city?: string;
    area?: string;
    street?: string;
    pincode?: string;
    nearbyLandmark?: string;
  };
  status: 'active' | 'blocked';
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema(
  {
    aquid: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'vendor', 'member', 'rider'],
      default: 'user',
      required: true,
    },
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
      cuntry: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      area: {
        type: String,
        trim: true,
      },
      street: {
        type: String,
        trim: true,
      },
      pincode: {
        type: String,
        trim: true,
      },
      nearbyLandmark: {
        type: String,
        trim: true,
      },
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
