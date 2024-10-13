import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  classId: Types.ObjectId;
  role: string;
  grades?: string[];
}

const UserSchema = new Schema<IUser>({});

export default mongoose.model<IUser>("User", UserSchema);
