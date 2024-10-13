import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface IGrades {
  name:string,
  grade:string,
}
export interface IUser extends Document {
  user_name: string;
  email: string;
  password: string;
  classId?: Types.ObjectId;
  is_Ateacher: boolean;
  grades?: IGrades[];
}

const gradesSchema = new Schema<IGrades>({
  name:{
    type:String,
    required:[true,"name is mandatory"]
  },
  grade:{
    type:String,
    required:[true,"grades is mandatory"]
  }
  
})

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

    //ref Classroom Id
  },
  is_Ateacher:{
    type:Boolean,
    default:false
  },
  grades:{
    type:[gradesSchema],
  }
});

export default mongoose.model<IUser>("User", UserSchema);



