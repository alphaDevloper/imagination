import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    clerkId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
  },
  { timestamps: true }
);

const User = models?.User || model("User", UserSchema);

export default User;
