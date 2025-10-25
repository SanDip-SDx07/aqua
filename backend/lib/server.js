"use strict";
// 🌐 Global Middlewares & Server Setup
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Core Dependencies
// ==================================================
// const express = require('express');
// const cors = require('cors');
// const rateLimit = require('express-rate-limit');
// const cookieParser = require('cookie-parser');
// const dotenv = require('dotenv');
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// Import custom modules
// ===================================================
// const connectMongoDB = require('./@config/connectMongoDB');
// const { connectRedis } = require("./config/connectRedis");
// const globalRouteHandler = require("./@utils/globalRouteHandler");
// const { AppError } = require('@utils');
// const userRouter = require("./routes/userRouter/userRouter-Index");
// import { AppError } from '@utils';
const connectMongoDB_1 = __importDefault(require("@config/connectMongoDB"));
// Load environment variables
// ===================================================
dotenv_1.default.config({ path: './config.env', debug: true });
// Initialize Express app
const app = (0, express_1.default)();
// 🔓 Allow Cross-Origin-Resource-Sharing (CORS)
// Basic CORS - allows all origins
// ===================================================
// app.use(cors());
// app.options("*", cors());
// 🔓 Allow Cross-Origin-Resource-Sharing (CORS)
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // your frontend origin
    credentials: true, // allow cookies
}));
// Optional: Handle OPTIONS preflight
// app.options(
//   "*",
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   }),
// );
// Example for specific origin and credentials:
// app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
// 🚦 Rate Limiting Middleware
// Protects against too many requests from the same IP
// ===================================================
// const limiter = rateLimit({
//   max: 100, // limit each IP to 100 requests
//   windowMs: 60 * 60 * 1000, // per 1 hour
//   message: "Too many requests from this IP, please try again after an hour"
// });
// app.use("/api", limiter);
// 📦 Cookie Parser Middleware
// Parses incoming cookie request
// ===================================================
app.use((0, cookie_parser_1.default)());
// 📦 Body Parser Middleware
// Parses incoming JSON request bodies
// ===================================================
app.use(express_1.default.json());
// 📌 API Routes
// ===================================================
// app.use("/api/v1/users", userRouter);
// ❌ Handle Undefined Routes
// ===================================================
// app.all("*", (req, res, next) => {
//   next(new AppError("Can't find this route on our server.", 404));
// });
// 🛡 Global Error Handler Middleware
// ===================================================
// app.use(globalRouteHandler);
// 🚀 Server Start Function
// ===================================================
const port = process.env.PORT || 8000;
const startServer = async () => {
    try {
        // Connect to databases
        await (0, connectMongoDB_1.default)();
        // await connectRedis();
        // Start listening on the specified port
        app.listen(port, '0.0.0.0', () => {
            console.log(`🚀 Server running at http://0.0.0.0:${port}`);
        });
    }
    catch (err) {
        console.error('❌ Startup Error:', err);
        process.exit(1);
    }
};
// ▶️ Start Server
// ===================================================
startServer().then();
