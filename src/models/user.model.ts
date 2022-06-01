import mongoose, { Schema } from "mongoose";
interface IUser {
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        name: 'name',

    }
});

export default mongoose.model<IUser>("User", UserSchema);
