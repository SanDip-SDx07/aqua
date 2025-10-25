"use strict";
// const catchAsync = require('../@utils/catchAsync');
// const User = require('../models/userModel');
// const { AppError, isMobile } = require('@utils');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("@utils");
const catchAsync_1 = __importDefault(require("@utils-local/catchAsync"));
const userModel_1 = __importDefault(require("../models/userModel"));
const entry = async (mobileNumber) => { };
const userController = {
    login: (0, catchAsync_1.default)(async (req, res, next) => {
        const { mobileNumber } = req.body;
        if ((0, _utils_1.isMobile)(mobileNumber)) {
            new _utils_1.AppError('Invalid mobile number', 400);
        }
        // Logic to authenticate user
        const user = await userModel_1.default.findOne({ mobileNumber });
        if (!user) {
            return next(new _utils_1.AppError('User not found', 404));
        }
        res.status(200).json({ status: 'success', message: 'Login successful', user });
    }),
    me: (0, catchAsync_1.default)(async (req, res, next) => {
        const userId = req.params.id;
        // Logic to retrieve user profile from database
        res.json({ message: `User profile for user ID: ${userId}` });
    }),
};
exports.default = userController;
