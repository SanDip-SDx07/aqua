// 🌐 Global Middlewares & Server Setup

// Core Dependencies
// ==================================================
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Import custom modules
// ===================================================
import { AppError } from '@aqua/utils';
import connectMongoDB from './@config/connectMongoDB';
import globalRouteHandler from './@utils/globalRouteHandler';

// Import Routes
// ===================================================
import userRouter from './routes/userRoutes';

// Load environment variables
// ===================================================
dotenv.config({ path: './config.env', debug: true });

// Initialize Express app
const app = express();

// 🔓 Allow Cross-Origin-Resource-Sharing (CORS)
// Basic CORS - allows all origins
// ===================================================
// app.use(cors());
// app.options("*", cors());
// 🔓 Allow Cross-Origin-Resource-Sharing (CORS)
app.use(
  cors({
    origin: true, // your frontend origin
    credentials: true, // allow cookies
  }),
);

// Optional: Handle OPTIONS preflight
app.options(
  /.*/,
  cors({
    origin: true,
    credentials: true,
  }),
);

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
app.use(cookieParser());

// 📦 Body Parser Middleware
// Parses incoming JSON request bodies
// ===================================================
app.use(express.json());

// 📌 API Routes
// ===================================================
app.use('/api/v1/users', userRouter);

// ❌ Handle Undefined Routes
// ===================================================
app.all(/.*/, (req, res, next) => {
  next(new AppError("Can't find this route on our server.", 404));
});

// 🛡 Global Error Handler Middleware
// ===================================================
app.use(globalRouteHandler);

// 🚀 Server Start Function
// ===================================================
const port = process.env.PORT || 8000;

const startServer = async () => {
  try {
    // Connect to databases
    await connectMongoDB();
    // await connectRedis();

    // Start listening on the specified port
    app.listen(port as number, '0.0.0.0', () => {
      console.log(`🚀 Server running at http://0.0.0.0:${port}`);
    });
  } catch (err) {
    console.error('❌ Startup Error:', err);
    process.exit(1);
  }
};

// ▶️ Start Server
// ===================================================
startServer().then();
