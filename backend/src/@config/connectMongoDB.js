const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env', debug: true });

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

module.exports = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
  }
};
