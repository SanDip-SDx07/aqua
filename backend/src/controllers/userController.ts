// const catchAsync = require('../@utils/catchAsync');
// const User = require('../models/userModel');
// const { AppError, isMobile } = require('@utils');

// import { AppError, isMobile } from '../../../packages/utils';
import { AppError, isMobile } from '@aqua/utils';
import catchAsync from '../@utils/catchAsync';
import User from '../models/userModel';

const entry = catchAsync(async (req, res, next) => {
  const { mobileNumber, address } = req.body;
  if (isMobile(mobileNumber)) {
    new AppError('Invalid mobile number', 400);
  }

  // check if user exists
  let user = await User.findOne({ mobileNumber });

  // if not, create new user
  if (!user) {
    user = await User.create({
      username: mobileNumber,
      mobileNumber,
      address: address,
      status: 'panding',
    });
  }

  // if exists, return user
  res.status(200).json({ status: 'success', message: 'Login successful', user });
});

const userController = { entry };

export default userController;
