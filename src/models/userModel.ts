import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  user_name: string;
  email: string;
  password: string;
  classId?: Types.ObjectId;
  is_Ateacher: boolean;
  grades?: string[];
}

const UserSchema = new Schema<IUser>({
  user_name:{
    type:String,
    required:[true,"user Name is mandatory"]
  },
  email:{
    type:String,
    required:[true,"email is mandatory"]
  },
  password:{
    type:String,
    required:[true,"password is mandatory"]
  },
  classId:{
    type:Schema.Types.ObjectId,
    required:[false,"classId is not mandatory"]
  },
  is_Ateacher:{
    type:Boolean,
    default:false
  },
  grades:{
    type:String,
    required:[false,"grades is not mandatory"]
  }
});

export default mongoose.model<IUser>("User", UserSchema);



