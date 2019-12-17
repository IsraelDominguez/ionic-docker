
import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

interface IUser extends Document {
    nombre: string;
    avatar: string;
    email: string;
    passwrod: string;
}

export const User = model<IUser>('User', userSchema);
