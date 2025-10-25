// const catchAsync = require('../@utils/catchAsync');
// const User = require('../models/userModel');
// const { AppError, isMobile } = require('@utils');

import { AppError, isMobile } from '@utils';
import catchAsync from '@utils-local/catchAsync';
import User from '../models/userModel';

const entry = async (mobileNumber: number) => {};

const userController = {
  login: catchAsync(async (req, res, next) => {
    const { mobileNumber } = req.body;
    if (isMobile(mobileNumber)) {
      new AppError('Invalid mobile number', 400);
    }

    // Logic to authenticate user
    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return next(new AppError('User not found', 404));
    }

    res.status(200).json({ status: 'success', message: 'Login successful', user });
  }),

  me: catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    // Logic to retrieve user profile from database
    res.json({ message: `User profile for user ID: ${userId}` });
  }),
};

export default userController;
