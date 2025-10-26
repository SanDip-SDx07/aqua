import { Request, Response, NextFunction } from 'express';

import { AppError, isMobile, generateUserId } from '@aqua/utils';
import catchAsync from '../@utils/catchAsync';
import User, { type IUser } from '../models/userModel';

const entry = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { role, mobileNumber, address }: Partial<IUser> = req.body;
  if (!role || !mobileNumber || !address || !address.city)
    return next(new AppError('Missing required fields', 400));

  if (!isMobile(mobileNumber)) {
    return next(new AppError('Invalid mobile number', 400));
  }

  // check if user exists
  let user = await User.findOne({ mobileNumber });

  // if not, create new user
  if (!user) {
    const aquid = generateUserId(role, address?.city, mobileNumber, '');
    user = await User.create({
      aquid,
      role,
      mobileNumber,
      address,
      status: 'panding',
    });
  }

  // if exists, return user
  res.status(200).json({ status: 'success', message: 'Login successful', user });
});

const userController = { entry };
export default userController;
