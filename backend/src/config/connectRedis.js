const { createClient } = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.REDIS_USERNAME;
const password = process.env.REDIS_PASSWORD;
const host = process.env.REDIS_HOST;
const port = Number(process.env.REDIS_PORT);

if (!username || !password || !host || !port) {
  throw new Error("Radis environment variables are missing!");
}

const client = createClient({ username, password, socket: { host, port } });

client.on("error", (err) => console.error("🔴 Redis Client Error:", err));

const connectRedis = async () => {
  try {
    await client.connect();
    console.log("🟢 Redis Connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectRedis, redisClient: client };
