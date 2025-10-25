"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './config.env', debug: true });
const mongoUri = process.env.MONGO_URI;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoName = process.env.MONGO_NAME;
if (!mongoUri || !mongoPassword || !mongoName) {
    throw new Error('MongoDB environment variables are missing!');
}
const connectionString = mongoUri
    ?.replace('<db_password>', mongoPassword)
    ?.replace('<db_name>', mongoName);
//   const connectionString = process.env
//     .MONGO_URI!.replace("<db_password>", process.env.MONGO_PASSWORD!)
//     .replace("<db_name>", process.env.MONGO_NAME!);
const connectMongoDB = async () => {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('MongoDB Connected');
    }
    catch (err) {
        console.error(err);
    }
};
exports.default = connectMongoDB;
