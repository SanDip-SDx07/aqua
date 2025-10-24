import { error } from "console";

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

const connectMongoDB = require("../config/connectMongoDB");

const app = express();

const PORT = process.env?.PORT || 8000;

const startServer = async () => {
  try {
    // Connect to Database
    await connectMongoDB();

    // Starting the Server
    await app.listen(PORT, "0.0.0.0", () => {
      console.log(`Sarver running at http://0.0.0.0${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer().then();

// yarn workspace backend dev      # development (hot reload)
// yarn workspace backend build    # compile TS
// yarn workspace backend start    # run production
