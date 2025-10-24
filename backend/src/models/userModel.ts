import mongoose from "mongoose";

interface IUserProps extends mongoose.Document {
  username: string;
  mobileNumber: string;
  address: string;
  status: "active" | "blocked";
}

const userSchema: mongoose.Schema<IUserProps> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      required: true,
    },
  },
  { timestamps: true, collection: "users" },
);

export default mongoose.model<IUserProps>("UserModel", userSchema);
