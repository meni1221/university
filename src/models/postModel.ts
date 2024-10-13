import mongoose, { Schema, Document, Types } from "mongoose";

export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  ref: "IUser";
  comments: IComment[];
}

const CommentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: [true, "content is mandatory"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "IUser",
    required: [true, "author is mandatory"],
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: [true, "title is mandatory"],
  },
  content: {
    type: String,
    required: [true, "content is mandatory"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "IUser",
    required: [true, "author is mandatory"],
  },
  comments: {
    type: [CommentSchema],
  },
});

export default mongoose.model<IPost>("Post", PostSchema);
