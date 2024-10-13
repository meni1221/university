import mongoose, { Schema } from "mongoose";

export interface IClassrom {
  name: string;
  teacher: mongoose.Types.ObjectId;
  students: mongoose.Types.ObjectId[];
}

const ClassromSchema = new Schema<IClassrom>({
  name: {
    type: String,
    required: [true, "name is mandatory"],
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "IUser",
    required: [true, "teacher is mandatory"],
  },
  students: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
});

export default mongoose.model<IClassrom>("Classrom", ClassromSchema);
