import express from 'express';

const userRouter = express.Router();

import userController from '../controllers/userController';

userRouter.route('/entry').post(userController.entry);

export default userRouter;
