import mongoose, { Schema, Document } from "mongoose";
interface IUser {
  name: string;
  email: string;
  password: string;
}


const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    name: "name",
  },
  email: {
    type: String,
    required: true,
    name: "email",
  },
  password: {
    type: String,
    required: true,
    name: "password",
  },
});

export default mongoose.model<IUser>("User", UserSchema);
export type UserDocument = IUser & Document;
